import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/Seo"
import StaticPromo from "../components/StaticPromo"
import ApplicationsComponent, {
  ContentPlaceholder,
} from "../components/Applications"

import { graphql } from "gatsby"

const IndexPage = ({ data }: IApplications) => {
  const allApps = data.allSanityApp.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Hero data={data.coverImage} />
      <div>
        {data && allApps ? (
          <ApplicationsComponent data={data} />
        ) : (
          <div className="mx-auto my-auto">
            <ContentPlaceholder />
          </div>
        )}
      </div>
      <StaticPromo />
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query {
    coverImage: file(relativePath: { eq: "p-dashboard-6fc11ba51b.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90, toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allSanityApp(limit: 6) {
      edges {
        node {
          title
          screenshot {
            asset {
              fluid(maxWidth: 400, maxHeight: 400, toFormat: WEBP) {
                ...GatsbySanityImageFluid
              }
            }
          }
          deploy {
            title
            deploymentUrl
            button
            logo {
              asset {
                fluid(maxHeight: 30, maxWidth: 30) {
                  base64
                  srcWebp
                }
              }
            }
          }
          github
          _rawDescription(resolveReferences: { maxDepth: 5 })
          technology {
            slug {
              current
            }
            logo {
              asset {
                fluid(maxWidth: 100) {
                  src
                  base64
                  srcWebp
                }
              }
            }
            languages {
              title
              logo {
                asset {
                  fluid(maxHeight: 30, maxWidth: 30) {
                    src
                    base64
                    srcWebp
                  }
                }
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
    }
  }
`
