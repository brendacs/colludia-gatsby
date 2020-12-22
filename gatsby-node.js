/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = require.resolve(
    `./src/components/templates/post/post.js`
  )
  const authorTemplate = require.resolve(
    `./src/components/templates/author/author.js`
  )
  const infoTemplate = require.resolve(
    `./src/components/templates/info/info.js`
  )
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
              pageType
              author
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
  // Use data to create pages
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.pageType === "author") {
      createPage({
        path: node.frontmatter.slug,
        component: authorTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    } else if (node.frontmatter.pageType === "info") {
      createPage({
        path: node.frontmatter.slug,
        component: infoTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    } else {
      createPage({
        path: node.frontmatter.slug,
        component: postTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    }
  })
}
