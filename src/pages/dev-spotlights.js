import React from 'react'
import SEO from '../components/seo'
import ArticleList from '../components/layouts/article-list/article-list'
import {featuredPost, posts} from '../constants'

const SpotlightPage = () => (
  <>
    <SEO title='Developer Spotlights' />
    <ArticleList
      featuredPost={featuredPost}
      posts={posts}
      page="spotlight"
      limit={3}
    />
  </>
)

export default SpotlightPage
