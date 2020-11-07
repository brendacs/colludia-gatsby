import React from 'react'
import SEO from '../components/seo'
import ArticleList from '../components/layouts/article-list/article-list'
import {featuredPost, posts} from '../constants'

const ReviewsPage = () => (
  <>
    <SEO title='Developer Spotlights' />
    <ArticleList
      featuredPost={featuredPost}
      tooltip="Our Spotlights shine a light on our favorite indie game developers and studios. We review indie devs' best games and distinct style as well as give interviews to dive deeper into their process, design, or plans."
      posts={posts}
      page="spotlight"
      limit={3}
    />
  </>
)

export default ReviewsPage
