// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './posts.scss'


const Posts = ({ posts, sortable }) => (
  <section class="posts-container">

  </section>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  sortable: PropTypes.bool
}

Posts.defaultProps = {
  sortable: false
}

export default Posts
