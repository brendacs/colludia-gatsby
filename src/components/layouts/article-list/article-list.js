// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import FeaturedPost from './featured-post'
import Posts from './posts'
import './article-list.scss'


const ArticleList = ({ featuredPost, tooltip, posts, page, sortable }) => (
  <>
    <FeaturedPost featuredPost={featuredPost} tooltip={tooltip} />
    <Posts posts={posts} page={page} sortable={sortable} />
  </>
)

ArticleList.propTypes = {
  featuredPost: PropTypes.object.isRequired,
  tooltip: PropTypes.string.isRequired
}

export default ArticleList
