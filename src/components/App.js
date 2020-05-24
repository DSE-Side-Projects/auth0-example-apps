import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Button,
} from "reactstrap"
import React from "react"
import { Link } from "gatsby"
import { ProfilePlaceholder } from "../pages/profile"

const App = ({ app }) => {
  const slug = `app/${app.node.slug.current}`

  return (
    <>
      <Card style={{ width: 24 + "rem" }} className="mx-auto mt-5">
        <Link to={slug}>
          {app.node.screenshot ? (
            <CardImg
              top
              style={{ width: "100%" }}
              src={app.node.screenshot.asset.url}
              alt={app.node.title}
              loading="lazy"
            />
          ) : (
            <ProfilePlaceholder type="screenshot" />
          )}
        </Link>
        <CardBody>
          <CardTitle>
            <Link to={slug}>
              <h2>{app.node.title}</h2>
            </Link>
          </CardTitle>
          <CardText>{app.node._rawDescription[0].children[0].text}</CardText>
          <Row className="mx-auto justify-content-between">
            <p>
              <a href={app.node.quickstart} className="text-muted">
                Quickstart
              </a>
            </p>
            <p>
              <a href={app.node.docs} className="text-muted">
                Docs
              </a>
            </p>
          </Row>
          <Row className="mx-auto justify-content-center mb-3">
            <a
              href={app.node.deploy.deploymentUrl + app.node.github}
              className="deploy"
            >
              <img
                src={app.node.deploy.button}
                alt={`Deploy to ${app.node.deploy.title}`}
                title={`Deploy to ${app.node.deploy.title}`}
              />
            </a>
          </Row>
          <Row className="mx-auto justify-content-center mb-3">
            <Button className="btn-block btn-light" href={app.node.url}>
              {app.node.title} &rarr;
            </Button>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}

export default App
