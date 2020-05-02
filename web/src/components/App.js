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
import { Link } from 'gatsby'


const App = ({ app }) => {
  const slug = `app/${app.node.slug.current}`
  return (
    <>
      <Card style={{ width: 24 + "rem" }} className="mx-auto mt-5">
        <Link to={slug}>
          <CardImg
            top
            style={{ minHeight: "200px" }}
            src={app.node.screenshot.asset.url}
            alt={app.node.title}
            loading="lazy"
          />
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
            <a href={app.node.deploy} className="deploy">
              <img src="https://zeit.co/button" alt="Deploy to ZEIT Now" />
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
