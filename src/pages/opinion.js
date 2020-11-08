import React from 'react'
import SEO from '../components/seo'
import ArticleList from '../components/layouts/article-list/article-list'
import {featuredPost, posts} from '../constants'

const OpinionPage = () => (
  <>
    <SEO title='Opinion' />
    <ArticleList
      featuredPost={featuredPost}
      tooltip="Opinion are opinion articles about games in general, but with a specific focus on indie games or games with narratives."
      posts={posts}
      page="opinion"
      limit={3}
    />
  </>
)

export default OpinionPage
