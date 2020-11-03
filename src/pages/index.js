import React from 'react'
// import { Link } from 'gatsby'
// import Image from '../components/image'
import SEO from '../components/seo'
import ArticleList from '../components/layouts/article-list/article-list'

const featuredPost = {
  title: 'The Beauty of Letting Go in When the Past Was Around',
  tagline: 'When The Past Was Around review: The vivid scenes and emotional music that perfectly fit together with the bittersweet narrative of Eda\'s past romance and locked away memories in When the Past Was Around nearly brought me to tears in a way no game has in a very long time.',
  image: 'WhenThePastWasAround.png'
}

const posts = [
  {}
]

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
