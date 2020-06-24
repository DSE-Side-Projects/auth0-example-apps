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
      <section className="py-12 px-4">
        <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div className="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
            <h2 className="text-5xl mb-6 leading-tight font-heading">
              No paper plane can be made without paper
            </h2>
            <p className="mb-8 text-gray-500 leading-relaxed">
              Professional, dedicated, local. Dunder Mifflin is on its best
              patch to change the way you think about paper. That’s us - people
              who sell limitless paper in the paperless world.
            </p>
            <div>
              <a
                className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"
                href="#"
              >
                Sign up
              </a>
              <a className="text-blue-700 hover:underline" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 px-2">
            <img src="placeholders/pictures/certificate.svg" alt="" />
          </div>
        </div>
      </section>
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
