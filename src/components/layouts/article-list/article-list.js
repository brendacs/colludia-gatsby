// import { Link } from 'gatsby'
import PropTypes from "prop-types"
import React from "react"
import FeaturedPost from "./featured-post"
import Posts from "./posts"
import { pageDescriptions } from "../../constants"
import "./article-list.scss"

const ArticleList = ({ featuredPost, page, sortable, limit }) => (
  <>
    {featuredPost && (
      <FeaturedPost
        featuredPost={featuredPost}
        tooltip={pageDescriptions[page]}
      />
    )}
    <Posts page={page} sortable={sortable} limit={limit} />
  </>
)

ArticleList.propTypes = {
  featuredPost: PropTypes.object,
  tooltip: PropTypes.string,
  page: PropTypes.string.isRequired,
  sortable: PropTypes.bool,
  limit: PropTypes.number,
}

ArticleList.defaultProps = {
  featuredPost: null,
  tooltip: "",
  sortable: false,
  limit: 12,
}

export default ArticleList
