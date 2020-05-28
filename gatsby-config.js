require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `DSE Sample Apps`,
    description: `Kick off your next troubleshooting project with one of Auth0 sample apps. Use provided tenant settings to speed things up even more!`,
    author: `@rosnovsky`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "76jo7qos",
        dataset: "production",
        useCdn: true,
        token: process.env.MY_SANITY_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
  ],
}
