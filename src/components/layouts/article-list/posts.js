import { graphql, StaticQuery } from "gatsby"
import React from "react"
import RenderedPosts from "../../common-ui/rendered-posts"

const Posts = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            filter: { frontmatter: { pageType: { eq: "post" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 100)
                frontmatter {
                  pageType
                  game
                  slug
                  title
                  postType
                  desc
                  tagline
                  date(formatString: "YYYYMMDD")
                  releaseDate(formatString: "YYYYMMDD")
                  image
                  author
                  categories
                }
              }
            }
          }
        }
      `}
      render={data => <RenderedPosts data={data} {...props} />}
    />
  )
}

export default Posts
