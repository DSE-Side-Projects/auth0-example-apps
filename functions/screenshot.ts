const sanityClient = require("@sanity/client")
const fetchData = require("node-fetch")

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const documentArray = async () => {
  const docs = await fetchData(
    `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=*[_type == "app"]`,
    {
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
      },
    }
  )
    .then((response) => response.json())
    .then((result) => result.result)
  return docs
}

exports.handler = async () => {
  const responseBodyArray: Array<Record<string, unknown>> = []
  const documents = await documentArray()
  for (let i = 0; i < documents.length; i++) {
    const doc = documents[i]
    const SITE_URL = doc.url

    // const url = `https://api.microlink.io?url=${SITE_URL}&screenshot=true&meta=false&overlay.browser=light&overlay.background=linear-gradient(225deg%2C%20%23FF057C%200%25%2C%20%238D0B93%2050%25%2C%20%23321575%20100%25)&embed=screenshot.url&nonce=${
    //   Math.random() * 320
    // }`
    const url = `https://api.apiflash.com/v1/urltoimage?access_key=7f3eb66149a5493abd0711522577c96b&format=jpeg&quality=85&response_type=image&transparent=true&url=${SITE_URL}&width=1080`

    const fetchScreenshot = await fetchData(url)
    const data = await fetchScreenshot
    if (data.status !== 200) {
      const resetTimestamp = data.headers.get("x-rate-limit-reset")
      const resetTime = new Date(resetTimestamp * 1000).toLocaleString()
      const errorMessage = {
        error: data.statusText,
        rateLimitResetTime: resetTime,
      }
      return { body: JSON.stringify(errorMessage), statusCode: "500" }
    } else {
      responseBodyArray.push(doc._id)
      const screenshotImage = await data.arrayBuffer()
      const buff = await Buffer.from(new Uint8Array(await screenshotImage))
      client.assets
        .upload("image", buff, {
          filename: `${doc._id}-screenshot.png`,
        })
        .then((imageAsset) => {
          const mutations = [
            {
              patch: {
                id: doc._id,
                set: {
                  screenshot: {
                    _type: "image",
                    asset: {
                      _type: "reference",
                      _ref: imageAsset._id,
                    },
                  },
                },
              },
            },
          ]
          fetchData(
            `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`,
            {
              method: "post",
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
              },
              body: JSON.stringify({ mutations }),
            }
          )
            .then((response) => response.json())
            .then((result) => {
              responseBodyArray.push(result)
            })
        })
    }
  }
  console.log(responseBodyArray)
  return { body: JSON.stringify(responseBodyArray), statusCode: "200" }
}
