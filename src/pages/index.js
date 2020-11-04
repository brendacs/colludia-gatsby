import React from 'react'
// import { Link } from 'gatsby'
// import Image from '../components/image'
import SEO from '../components/seo'
import ArticleList from '../components/layouts/article-list/article-list'
import {featuredPost, posts} from './constants'

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <ArticleList
      featuredPost={featuredPost}
      tooltip="Our latest featured article about an indie game with a story to tell."
      posts={posts}
    />
  </>
)

export default IndexPage
