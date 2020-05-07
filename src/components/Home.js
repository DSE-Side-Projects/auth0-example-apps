import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Apps, { ContentPlaceholder } from './Apps';
import SEO from './seo';


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
  `);
  const apps = data.allSanityApp.edges;

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
  );
};

export default Home;
