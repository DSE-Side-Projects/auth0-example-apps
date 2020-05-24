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
  
  const final = docs.result.forEach(async doc => {
    const SITE_URL = doc.url;

    const url = `https://api.microlink.io?url=${SITE_URL}&screenshot=true&waitFor=1&meta=false&overlay.browser=light&overlay.background=linear-gradient(225deg%2C%20%23FF057C%200%25%2C%20%238D0B93%2050%25%2C%20%23321575%20100%25)&embed=screenshot.url&nonce=123`;
    
    console.log(`Fetching ${url}`)
    const fetchScreenshot = await fetch(url)
    console.log(`Fetched: ${fetchScreenshot}`)
    let screenshotImage = await fetchScreenshot.arrayBuffer()
    console.log(`Buffer: ${screenshotImage}`)
    let buff = await new Buffer.from(new Uint8Array(await screenshotImage)); 
    client.assets.upload('image', buff, {
      filename: `${doc._id}-screenshot.png`
      })
      .then(imageAsset => {
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
          .then(result => {
            console.log(result); 
            return {"body": JSON.stringify(result), "statusCode": 200}
          })
          .catch(error => new Error(error))
        })
      })
      return { final, "statusCode": "200" }
}
