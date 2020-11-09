// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import FeaturedPost from './featured-post'
import Posts from './posts'
import { tooltips } from '../../componentConstants'
import './article-list.scss'


const ArticleList = ({ featuredPost, posts, page, sortable, limit }) => (
  <>
    <FeaturedPost featuredPost={featuredPost} tooltip={tooltips[page]} />
    <Posts posts={posts} page={page} sortable={sortable} limit={limit} />
  </>
)

ArticleList.propTypes = {
  featuredPost: PropTypes.object.isRequired,
  tooltip: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
  sortable: PropTypes.bool,
  limit: PropTypes.number
}

ArticleList.defaultProps = {
  sortable: false,
  limit: 12
}

export default ArticleList
