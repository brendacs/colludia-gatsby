import React from 'react'
import SEO from '../components/seo'
import ArticleList from '../components/layouts/article-list/article-list'
import {featuredPost, posts} from '../constants'

const ReviewsPage = () => (
  <>
    <SEO title='Reviews' />
    <ArticleList
      featuredPost={featuredPost}
      posts={posts}
      page="review"
      sortable
    />
  </>
)

export default ReviewsPage
