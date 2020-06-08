import React from "react"
import ApplicationsComponent from "./Applications"
import { Container, Row, Col } from "reactstrap"
import SEO from "./seo"
import { ContentPlaceholder } from "./Applications"
import { graphql, useStaticQuery } from "gatsby"

const Home = ({ data }: IApplications) => {
  return (
    <>
      <SEO title="Home" />
      <Container fluid="true" className="container-fluid px-auto mx-auto">
        <Row className="pb-5">
          <Col className="d-flex mx-auto justify-content-center">
            {data && data.allSanityApp.edges ? (
              <ApplicationsComponent data={data} />
            ) : (
              <div className="mx-auto my-auto">
                <ContentPlaceholder />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home

export const sanityData = useStaticQuery(graphql`
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
`)
