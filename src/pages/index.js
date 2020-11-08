import React from 'react'
import SEO from '../components/seo'
import ArticleList from '../components/layouts/article-list/article-list'
import {featuredPost, posts} from '../constants'

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <ArticleList
      featuredPost={featuredPost}
      tooltip="Our latest featured article about an indie game with a story to tell."
      posts={posts}
      page="latest"
    />
  </>
)

export default IndexPage
