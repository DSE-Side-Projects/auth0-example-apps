import React from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ApplicationsComponent, {
  ContentPlaceholder,
} from "../components/Applications"

import { graphql } from "gatsby"

const IndexPage = ({ data }: IApplications) => {
  const allApps = data.allSanityApp.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid="true" className="container-fluid px-auto mx-auto">
        <Row className="pb-5">
          <Col className="d-flex mx-auto justify-content-center">
            {data && allApps ? (
              <ApplicationsComponent data={data} />
            ) : (
              <div className="mx-auto my-auto">
                <ContentPlaceholder />
              </div>
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
              fluid(maxHeight: 382, maxWidth: 382) {
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
