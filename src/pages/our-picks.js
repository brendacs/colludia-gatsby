import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import { featuredPost } from "../data/featured-posts"

const PicksPage = () => (
  <>
    <SEO title="Our Picks" />
    <ArticleList featuredPost={featuredPost["our picks"]} page="our picks" limit={3} />
  </>
)

export default PicksPage
