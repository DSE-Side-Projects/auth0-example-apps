import React from "react"
import Apps from "./Apps"
import { Container, Row, Col } from "reactstrap"
import SEO from "./seo"
import { ContentPlaceholder } from "./Apps"
import { graphql, useStaticQuery } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
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
  `)
  const apps = data.allSanityApp.edges

  return (
    <>
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
    </>
  )
}

export default Home
