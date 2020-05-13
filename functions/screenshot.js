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
    token: process.env.SANITY_API_TOKEN,
    useCdn: true
  })
  
  docs.result.forEach(async doc => {
    const SITE_URL = doc.url;

    const url = `https://api.microlink.io??url=${SITE_URL}&waitFor=5&screenshot=true&meta=true&overlay.browser=light&overlay.background=%23bebebe&embed=screenshot.url`

    const fetchScreenshot = await fetch(url)
    let screenshotImage = await fetchScreenshot.arrayBuffer()
    let buff = await new Buffer.from(new Uint8Array(await screenshotImage)); 
    client.assets.upload('image', buff, {
      filename: `${doc.appId}-screenshot.png`
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
