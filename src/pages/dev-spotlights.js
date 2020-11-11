import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import { featuredPost } from "../constants"

const SpotlightPage = () => (
  <>
    <SEO title="Developer Spotlights" />
    <ArticleList featuredPost={featuredPost} page="spotlight" limit={3} />
  </>
)

export default SpotlightPage
