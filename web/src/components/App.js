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

const App = ({ app }) => {
  return (
    <>
      <Card style={{ width: 24 + "rem" }} className="mx-auto mt-5">
        <a href={app.node.url}>
          <CardImg
            top
            style={{ minHeight: "200" + "px" }}
            src={"screenshot"}
            alt={app.node.stack.title}
          />
        </a>
        <CardBody>
          <CardTitle>
            <a href={app.node.stack.url}>
              <h2>{app.node.title}</h2>
            </a>
          </CardTitle>
          <CardText>{app.node.description.sanityChildren}</CardText>
          <Row className="mx-auto justify-content-between">
            <p>
              <a href={app.node.title} className="text-muted">
                Quickstart
              </a>
            </p>
            <p>
              <a href={app.node.stack.url} className="text-muted">
                Docs
              </a>
            </p>
          </Row>
          <Row className="mx-auto justify-content-center mb-3">
            <a href={app.node.stack.url} className="deploy">
              <img src="https://zeit.co/button" alt="Deploy to ZEIT Now" />
            </a>
          </Row>
          <Row className="mx-auto justify-content-center mb-3">
            <Button className="btn-block btn-light" href={app.node.stack.url}>
              {app.node.title} &rarr;
            </Button>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}

export default App