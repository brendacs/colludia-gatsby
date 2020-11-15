import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import RenderedPosts from "../../common/rendered-posts"

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
                  date(formatString: "MMMM DD, YYYY")
                  releaseDate(formatString: "MMMM DD, YYYY")
                  image
                  author
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

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      url: PropTypes.string,
      image: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  page: PropTypes.string.isRequired,
  sortable: PropTypes.bool,
  limit: PropTypes.number,
}

Posts.defaultProps = {
  sortable: false,
  limit: 12,
}

export default Posts
