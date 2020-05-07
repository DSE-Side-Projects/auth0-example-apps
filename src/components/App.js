/* eslint-disable max-len */
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Button,
} from 'reactstrap';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ProfilePlaceholder } from '../pages/profile';


const App = ({ app }) => {
  const [siteScreenshot, setSiteScreenshot] = useState();

  const slug = `app/${app.node.slug.current}`;

  useEffect(() => {
    // This is a temporary proof-of concept.

    // On deploy, netlify should run a webhook, touching the below endpoint. This would trigger a serverless function, which in turn would fetch the latest screenshot of all deployed sites and put them into corresponding Sanity objects. Somewhere inbetween it could be worth it to resize/compress sccreenshots with kraken.io.

    // For now, this code just fetches a single screenshot which acts as a placeholder.

    // eslint-disable-next-line no-undef
    const screenshot = async () => fetch('https://dse.netlify.app/.netlify/functions/screenshot', {
      headers: { Accept: 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setSiteScreenshot(data);
      })
      .catch((error) => ({ statusCode: 422, body: String(error) }));
    screenshot();
  }, []);

  return (
    <>
      <Card style={{ width: `${24}rem` }} className="mx-auto mt-5">
        <Link to={slug}>
          {siteScreenshot ? (
            <CardImg
              top
              style={{ minHeight: '200px' }}
              src={siteScreenshot}
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
            <a href={app.node.deploy} className="deploy">
              <img
                src="https://www.netlify.com/img/deploy/button.svg"
                alt="Deploy to Netlify"
              />
            </a>
          </Row>
          <Row className="mx-auto justify-content-center mb-3">
            <Button className="btn-block btn-light" href={app.node.url}>
              {app.node.title}
              {' '}
              &rarr;
            </Button>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default App;

App.propTypes = {
  app: PropTypes.node.isRequired,
};
