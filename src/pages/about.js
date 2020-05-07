import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container fluid="true" className="container-fluid px-auto mx-auto">
      <Row className="pb-5">
        <Col className="justify-content-center">
          <h1>Auth0 Sample Apps</h1>
          <p>
            The purpose of this project is to help
            {' '}
            <a href="https://auth0.com">Auth0</a>
            {' '}
            Developer Support Engineers
            spin-up, troubleshoot, and experiment with a variety of
            application they encounter daily. Work in progress
          </p>
          <h2>Flow</h2>
          <p>
            In order to simplify deployment of sample apps, we create
            individual apps from Auth0
            {' '}
            <a href="https://auth0.com/docs/quickstarts">Quickstarts</a>
            ,
            Guides, Tutorials and blog posts. We deploy each individual app
            with
            <a href="https://netlify.com">Netlify</a>
            {' '}
            with
            {' '}
            <i>netlify deploy --prod</i>
            , set DNS to point to the app, and add
            app&apos;s information to
            <a href="https://sanity.io">Sanity.io</a>
            {' '}
            (we
            use it as data store) at our
            {' '}
            <a href="https://dseapps.sanity.studio/desk">Sanity Studio</a>
            {' '}
            instance we also deploy for this project. With all this said and
            done, we have our main site showcase all the apps we have
            deployed.
          </p>
          <p>
            One of the main features here is a single-button deployment and
            Auth0 tenant settings in a `yaml` file (this file is a product of
            {' '}
            <a href="https://auth0.com/docs/extensions/deploy-cli/guides/install-deploy-cli">
              a0deploy CLI
            </a>
            {' '}
            export and it contains everything necessary to kickstart all apps
            we have deployed within 1 minute).
          </p>
          <h2>Stack and Tech</h2>
          <h3>Hosting</h3>
          <p>
            We deploy to
            {' '}
            <a href="https://netlify.com">Netlify</a>
            {' '}
            — a
            fantastic
            {' '}
            <a href="https://jamstack.org">JAMstack</a>
            {' '}
            hosting.
            It&apos;s perfect for single-page apps and static websites. For apps
            that require a backed server (regular webapps), hosting solution
            TBD 🤷‍♂️
          </p>
          <h3>DSE Sample Apps Site</h3>
          <p>
            The main site is powered by
            {' '}
            <a href="https://gatsbyjs.org">Gatsby</a>
            , built on
            {' '}
            <a href="https://gatsbyjs.com">Gatsby Cloud</a>
            {' '}
            on every commit
            and whenever any data is updated in our Sanity database. The build
            is then deployed to
            <a href="https://netlify.com">Netlify</a>
            {' '}
            and
            usually is up and running at
            {' '}
            <a href="https://dse.netlify.app">dse.netlify.app</a>
            {' '}
            within 1-2
            minutes. This CI/CD pipeline is already setup and doesn&apos;t require
            any tweaking at this time.
          </p>
          <h3>Sample Apps</h3>
          <p>
            Each sample app lives in it&apos;s own folder within this project.
            These folders are ignored by Netlify deployment pipeline. Whenever
            a change made to one of the apps, we manually deploy this app with
            {' '}
            <i>netlify deploy --prod</i>
            {' '}
            (or
            <i>netlify deploy</i>
            {' '}
            if you just
            need a preview — learn more about
            {' '}
            <a href="https://docs.netlify.com/cli/get-started/">
              Netlify CLI
            </a>
            ). When these changes are committed, no new builds will happen
            (unless there&apos;s an update to the main DSE Sample Apps site)
          </p>
          <h3>Fun</h3>
          <p>
            Netlify makes a screenshot of every site they deploy, and these
            screenshots are available through
            {' '}
            <a href="https://open-api.netlify.com/">Netlify API</a>
            . To make
            things fun, we fetch these screenshots for each sample app as a
            post-build Netlify hook. This hook calls a serverless function
            (learn more about
            {' '}
            <a href="https://docs.netlify.com/functions/overview/">
              Netlify Functions
            </a>
            ) which retrieves the latest site screenshot, sends it to
            {' '}
            <a href="https://kraken.io">Kraken.io</a>
            {' '}
            for resizing and
            compressing, and then
            {' '}
            <a href="https://www.sanity.io/docs/http-api-assets">sends</a>
            {' '}
            the
            resulting optimized image to our Sanity DB. As a result, our apps
            are always represented with the most current screenshot. Almost
            none of this actually works yet, but hey, work in progress,
            remember?
          </p>
          <h3>Auth0</h3>
          We are using
          {' '}
          <a href="https://auth0.com">Auth0</a>
          {' '}
          for
          authentication and authorization (surprise!). Eventually, Auth0 DSEs
          will be able to tweak certain parameters of the apps they wish to
          single-click deploy. They will also be able to modify tenant
          parameters right from the app and export `yaml` right away.
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default AboutPage;
