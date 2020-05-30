# Auth0 Sample Apps

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a92a4837469d4c0a8fe947e032940a67)](https://app.codacy.com/manual/rosnovsky/auth0-example-apps?utm_source=github.com&utm_medium=referral&utm_content=rosnovsky/auth0-example-apps&utm_campaign=Badge_Grade_Dashboard) ![](https://david-dm.org/rosnovsky/auth0-example.apps.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/f91ff3d7-bb7e-41a5-b11a-fb2943beea18/deploy-status)](https://app.netlify.com/sites/dse/deploys) [![Build Status](https://travis-ci.org/rosnovsky/auth0-example-apps.svg?branch=master)](https://travis-ci.org/rosnovsky/auth0-example-apps) [![codecov](https://codecov.io/gh/rosnovsky/auth0-example-apps/branch/master/graph/badge.svg)](https://codecov.io/gh/rosnovsky/auth0-example-apps) ![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-orange.svg)
![](https://github.com/DSE-Side-Projects/auth0-example-apps/blob/master/badges/lighthouse_accessibility.svg) ![](https://github.com/DSE-Side-Projects/auth0-example-apps/blob/master/badges/lighthouse_best-practices.svg) ![](https://github.com/DSE-Side-Projects/auth0-example-apps/blob/master/badges/lighthouse_performance.svg) ![](https://github.com/DSE-Side-Projects/auth0-example-apps/blob/master/badges/lighthouse_seo.svg) ![](https://github.com/DSE-Side-Projects/auth0-example-apps/blob/master/badges/lighthouse_pwa.svg)

The purpose of this project is to help [Auth0](https://auth0.com) Developer Support Engineers spin-up, troubleshoot, and experiment with a variety of application they encounter daily. Work in progress

## Flow

In order to simplify deployment of sample apps, we create individual apps from Auth0 [Quickstarts](https://auth0.com/docs/quickstarts), Guides, Tutorials and blog posts. We deploy each individual app with [Netlify](https://netlify.com) (`netlify deploy --prod`), set DNS to point to the app, and add app's information to [Sanity.io](https://sanity.io) (we use it as data store) at our [Sanity Studio](https://dseapps.sanity.studio/desk) instance we also deploy for this project. With all this said and done, we have our main site showcase all the apps we have deployed.

One of the main features here is a single-button deployment and Auth0 tenant settings in a `yaml` file (this file is a product of [`a0deploy` CLI](https://auth0.com/docs/extensions/deploy-cli/guides/install-deploy-cli) export and it contains everything necessary to kickstart all apps we have deployed within 1 minute).

## Stack and Tech

### Hosting

We deploy to [Netlify](https://netlify.com) — a fantastic [JAMstack](https://jamstack.org) hosting. It's perfect for single-page apps and static websites. For apps that require a backed server (regular webapps), hosting solution TBD 🤷‍♂️

### DSE Sample Apps Site

The main site is powered by [Gatsby](https://gatsbyjs.org), built on [Gatsby Cloud](https://gatsbyjs.com) on every commit and whenever any data is updated in our Sanity database. The build is then deployed to [Netlify](https://netlify.com) and usually is up and running at [https://dse.netlify.app](https://dse.netlify.app) within 1-2 minutes. This CI/CD pipeline is already setup and doesn't require any tweaking at this time.

### Sample Apps

Each sample app lives in it's own folder within this project. These folders are ignored by Netlify deployment pipeline. Whenever a change made to one of the apps, we manually deploy this app with `netlify deploy --prod` (or `netlify deploy` if you just need a preview — learn more about [Netlify CLI](https://docs.netlify.com/cli/get-started/)). When these changes are committed, no new builds will happen (unless there's an update to the main DSE Sample Apps site)

### Fun

Netlify makes a screenshot of every site they deploy, and these screenshots are available through [Netlify API](https://open-api.netlify.com/). To make things fun, we fetch these screenshots for each sample app as a post-build Netlify hook. This hook calls a serverless function (learn more about [Netlify Functions](https://docs.netlify.com/functions/overview/)) which retrieves the latest site screenshot, sends it to [Kraken.io](https://kraken.io) for resizing and compressing, and then [sends](https://www.sanity.io/docs/http-api-assets) the resulting optimized image to our Sanity DB. As a result, our apps are always represented with the most current screenshot :) Almost none of this actually works yet, but hey, work in progress, remember? ;)

### Auth0

We are using [Auth0](https://auth0.com) for authentication and authorization (surprise!). Eventually, Auth0 DSEs will be able to tweak certain parameters of the apps they wish to single-click deploy. They will also be able to modify tenant parameters right from the app and export `yaml` right away.
