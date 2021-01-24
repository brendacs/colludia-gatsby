import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import featuredPost from "../data/featured-posts.json"

const PicksPage = () => (
  <>
    <SEO title="Our Picks" />
    <ArticleList featuredPost={featuredPost["picks"]} page="picks" limit={3} />
  </>
)

export default PicksPage
