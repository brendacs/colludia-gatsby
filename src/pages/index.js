import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import { featuredPost } from "../constants"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ArticleList featuredPost={featuredPost} page="latest" />
  </>
)

export default IndexPage
