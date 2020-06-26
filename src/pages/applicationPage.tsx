import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { ProfilePlaceholder } from "./profile"
import Img from "gatsby-image"

const AppPage = (node: IApplication) => {
  const app = node.data.sanityApp
  console.error(app)

  return (
    <Layout>
      <SEO lang="en" title={app.title} />
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
        {app.screenshot ? (
          <Img
            className="w-full mb-2"
            fluid={app.screenshot.asset.fluid}
            alt={app.title}
            loading="lazy"
          />
        ) : (
          <ProfilePlaceholder type="screenshot" />
        )}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-orange-900">
            <h2 className="text-2xl">{app.title}</h2>
          </div>
          <div className="text-gray-700 my-4 leading-relaxed tracking-wide antialiased sm:subpixel-antialiased md:antialiased lg:subpixel-antialiased xl:antialiased">
            {app._rawDescription[0].children[0].text}
          </div>
          <div className="flex justify-between my-6">
            <p>
              <a href={app.quickstart} className="text-gray-600">
                Quickstart
              </a>
            </p>
            <p>
              <a href={app.docs} className="text-gray-600">
                Docs
              </a>
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <a href={app.deploy.deploymentUrl + app.github} className="deploy">
              <img
                src={app.deploy.button}
                alt={`Deploy to ${app.deploy.title}`}
                title={`Deploy to ${app.deploy.title}`}
              />
            </a>
          </div>
          <div className="flex justify-center">
            <a href={app.url} className="w-full">
              <button className=" bg-white w-full hover:bg-orange-900 hover:text-white duration-200 text-gray-800 font-semibold py-2 px-4 my-8 border hover:border-orange-900 border-gray-100 rounded shadow">
                {app.title} &rarr;
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AppPage

export const data = graphql`
  query AppPageQuery($id: String) {
    sanityApp(_id: { eq: $id }) {
      title
      screenshot {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      deploy {
        title
        deploymentUrl
        button
      }
      github
      _rawDescription(resolveReferences: { maxDepth: 5 })
      technology {
        title
        slug {
          current
        }
        logo {
          asset {
            url
          }
        }
      }
      slug {
        current
      }
      quickstart
      docs
      url
      _id
    }
  }
`
