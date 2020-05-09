import React from "react"
import Apps from "../components/Apps"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentPlaceholder } from "../components/Apps"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const apps = data.allSanityApp.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid="true" className="container-fluid px-auto mx-auto">
        <Row className="pb-5">
          <Col className="d-flex mx-auto justify-content-center">
            {data && apps ? (
              <Apps apps={apps} />
            ) : (
              <ContentPlaceholder
                className="mx-auto my-auto"
                title="Hm... This is impossible 🤔"
              />
            )}
          </Col>
        </Row>
      </Container>
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
              url
            }
          }
          appId
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
          deploy
          quickstart
          docs
          url
          _id
        }
      }
    }
  }
`
