import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import { featuredPost } from "../constants"

const PicksPage = () => (
  <>
    <SEO title="Our Picks" />
    <ArticleList featuredPost={featuredPost} page="our picks" limit={3} />
  </>
)

export default PicksPage
