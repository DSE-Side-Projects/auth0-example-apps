const createAppPages = async (graphql, actions, reporter) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityApp {
        edges {
          node {
            title
            screenshot {
              image {
                asset {
                  url
                }
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
            deploy {
              title
              deploymentUrl
              button
            }
            quickstart
            docs
            url
            _id
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const apps = result.data.allSanityApp.edges

  apps.forEach((edge, index) => {
    const path = `/app/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/pages/applicationPage.tsx"),
      context: { id: edge.node._id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createAppPages(graphql, actions, reporter)
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (["build-html", "develop-html"].includes(stage)) {
    /*
     * During the build step, `auth0-spa-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-spa-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-spa-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
