const fetch = require("node-fetch")

exports.handler = async (event, context) => {
  console.log(event.queryStringParameters.appId)

  const SITE_ID = event.queryStringParameters.appId || "61f07d5c-c199-49ba-8e70-4c309e9ebb09";
const DEPLOYS_ENDPOINT = `https://api.netlify.com/api/v1/sites/${SITE_ID}/deploys`

  // Making two requests is not ideal :(

  // In first request we fetch the latest deploy id
  return fetch(DEPLOYS_ENDPOINT, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NETLIFY_API_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const lastDeploy = data[0].id
      console.log(lastDeploy)

      // Now using this last deploy id, we fetch last deploy's screenchot URL
      return fetch(`https://api.netlify.com/api/v1/deploys/${lastDeploy}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.NETLIFY_API_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.screenshot_url)
          if (!data.screenshot_url) {
            throw new Error(
              'Screenshot is "null". I know, I know, it makes no sense, yet here we are ¯\\_(ツ)_/¯'
            )
          }
          return {
            statusCode: 200,
            body: JSON.stringify(data.screenshot_url),
          }
        })
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }))
}
