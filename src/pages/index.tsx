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
      <Hero />
      <div className="min-w-full">
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
    allSanityApp {
      edges {
        node {
          title
          screenshot {
            asset {
              fluid(maxHeight: 800, maxWidth: 800) {
                src
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
    }
  }
`
