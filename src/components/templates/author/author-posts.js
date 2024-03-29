import PropTypes from "prop-types"
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import RenderedPosts from "../../common-ui/rendered-posts"

const AuthorPosts = ({ author }) => {
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
                  slug
                  title
                  postType
                  tagline
                  date(formatString: "YYYYMMDD")
                  releaseDate(formatString: "YYYYMMDD")
                  image
                  author
                }
              }
            }
          }
        }
      `}
      render={data => <RenderedPosts data={data} author={author} />}
    />
  )
}

AuthorPosts.propTypes = {
  author: PropTypes.string,
}

export default AuthorPosts
