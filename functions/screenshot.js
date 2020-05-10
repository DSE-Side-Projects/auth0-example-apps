const sanityClient = require('@sanity/client');
const fetch = require("node-fetch");

exports.handler = async () => {
  const documentArray = await fetch(`https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=*[_type == "app"]`, {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
    }
  })

  const docs = await documentArray.json();
  const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    token: process.env.SANITY_API_TOKEN
  })
  
  docs.result.forEach(async doc => {
    const SITE_ID = doc.appId;
    const DEPLOYS_ENDPOINT = `https://api.netlify.com/api/v1/sites/${SITE_ID}/deploys`

    const response = await fetch(DEPLOYS_ENDPOINT, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NETLIFY_API_TOKEN}`,
      },
    })
    let data = await response.json();
    let lastDeploy = await data[0].id;
    const screenshot = await fetch(`https://api.netlify.com/api/v1/deploys/${lastDeploy}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NETLIFY_API_TOKEN}`,
          },
        })
    let result = await screenshot.json()
    if (!result) {
      throw new Error(
        'Screenshot is "null". I know, I know, it makes no sense, yet here we are ¯\\_(ツ)_/¯'
      )
    }
  
    const netlifyScreenshot = await fetch(result.screenshot_url)
    let screenshotImage = await netlifyScreenshot.arrayBuffer()
    let buff = await new Buffer.from( new Uint8Array(await screenshotImage)); 
    client.assets.upload('image', buff, {
      filename: `${SITE_ID}-screenshot.png`
      }).then(imageAsset => {
        const mutations = [{
          patch: {
            id: doc._id,
            set: {
              screenshot: {
                _type: 'image',
                asset: {
                  _type: "reference",
                  _ref: imageAsset._id,
                }
              },
            }
          }
        }];
        return fetch(`https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`, {
          method: 'post',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
          },
          body: JSON.stringify({mutations})
        })
          .then(response => response.json())
          .then(result => {console.log(result); return ({"body": JSON.stringify(result), "statusCode": "200"})})
          .catch(error => new Error(error))
      })
  })
  
}
