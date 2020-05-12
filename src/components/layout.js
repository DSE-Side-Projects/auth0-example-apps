import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import logo from "../images/auth0-logo-forlightbg.png"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query allAppsAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1460,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <Container className="pt-4 my-md-5 pt-md-5 border-top">
            <Row className="container container-fluid mx-auto">
              <Col className="col-12 col-md">
                <a className="mx-auto mb-2" href="https://auth0.com">
                  <img
                    loading="lazy"
                    src={logo}
                    width="50px"
                    alt="Auth0 Logo"
                  />
                </a>
                <p className="mt-2">Identity is complex. Deal with it.</p>
              </Col>
              <Col className="col-6 col-md d-block">
                <h5>Tools</h5>
                <ul className="list-unstyled">
                  <li className="my-2">
                    <a
                      href="https://manage.auth0.com/#/applications"
                      className="text-dark"
                    >
                      Manage Dashboard
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      href="https://github.com/rosnovsky/auth0-example-apps/blob/master/auth0/tenant.yaml"
                      className="text-muted"
                    >
                      Download tenant settings
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      href="https://github.com/rosnovsky/auth0-example-apps"
                      className="text-muted"
                    >
                      Fork on Github
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="https://har.auth0.net" className="text-muted">
                      HAR Inspector
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className="col-6 col-md">
                <h5>Auth0 Resources</h5>
                <ul className="list-unstyled my-2">
                  <li className="my-2">
                    <a
                      href="https://auth0.com/docs/videos/learn-identity"
                      className="text-dark"
                    >
                      Learn Identity
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      href="https://auth0.com/docs/videos/get-started/"
                      className="text-muted"
                    >
                      Getting Started
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="https://support.auth0.com/" className="text-muted">
                      Help & Support
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="https://auth0.com/blog/" className="text-muted">
                      Auth0 Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className="col-6 col-md">
                <h5>Authentication</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a href="https://oauth.net/2/" className="text-dark">
                      OAuth 2.0
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
