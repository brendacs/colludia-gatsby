import React from 'react'
import SEO from '../components/seo'
import ArticleList from '../components/layouts/article-list/article-list'
import {featuredPost, posts} from '../constants'

const PicksPage = () => (
  <>
    <SEO title='Our Picks' />
    <ArticleList
      featuredPost={featuredPost}
      tooltip="Our articles in the Reviews discuss indie games we love, especially those with a good story to tell."
      posts={posts}
      page="our picks"
      limit={3}
    />
  </>
)

export default PicksPage
