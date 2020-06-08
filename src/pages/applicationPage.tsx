import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Button,
  Container,
  Col,
} from "reactstrap"
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { ProfilePlaceholder } from "./profile"

const AppPage = (node) => {
  const app: IApplication = node.data.sanityApp

  return (
    <Layout>
      <SEO title={app.title} />
      <Container fluid="true" className="container-fluid px-auto mx-auto">
        <Row className="pb-5">
          <Col className="d-flex mx-auto justify-content-center">
            <Card style={{ width: 24 + "rem" }} className="mx-auto mt-5">
              {app.screenshot ? (
                <CardImg
                  top
                  style={{ minHeight: "200px" }}
                  src={app.screenshot.asset.url}
                  alt={app.title}
                  loading="lazy"
                  width="382px"
                  height="382px"
                />
              ) : (
                <ProfilePlaceholder type="screenshot" />
              )}
              <CardBody>
                <CardTitle>
                  <h2>{app.title}</h2>
                </CardTitle>
                <CardText>{app._rawDescription[0].children[0].text}</CardText>
                <Row className="mx-auto justify-content-between">
                  <p>
                    <a href={app.quickstart} className="text-muted">
                      Quickstart
                    </a>
                  </p>
                  <p>
                    <a href={app.docs} className="text-muted">
                      Docs
                    </a>
                  </p>
                </Row>
                <Row className="mx-auto justify-content-center mb-3">
                  <a
                    href={app.deploy.deploymentUrl + app.github}
                    className="deploy"
                  >
                    <img
                      src={app.deploy.button}
                      alt={`Deploy to ${app.deploy.title}`}
                    />
                  </a>
                </Row>
                <Row className="mx-auto justify-content-center mb-3">
                  <Button className="btn-block btn-light" href={app.url}>
                    {app.title} &rarr;
                  </Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
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
          url
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
