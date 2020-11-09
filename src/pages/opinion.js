import React from 'react'
import SEO from '../components/seo'
import ArticleList from '../components/layouts/article-list/article-list'
import {featuredPost, posts} from '../constants'

const OpinionPage = () => (
  <>
    <SEO title='Opinion' />
    <ArticleList
      featuredPost={featuredPost}
      posts={posts}
      page="opinion"
      limit={3}
    />
  </>
)

export default OpinionPage
