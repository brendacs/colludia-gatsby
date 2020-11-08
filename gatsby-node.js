/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = require.resolve(`./src/components/templates/post.js`)
  const authorTemplate = require.resolve(`./src/components/templates/author.js`)
  const infoTemplate = require.resolve(`./src/components/templates/info.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    let template = postTemplate
    switch(node.frontmatter.pageType) {
      case 'author':
        template = authorTemplate
      case 'info':
        template = infoTemplate
      default:
        template = postTemplate
    }

    createPage({
      path: node.frontmatter.slug,
      component: template,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
