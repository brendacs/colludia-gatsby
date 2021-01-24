import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import featuredPost from "../data/featured-posts.json"

const OpinionPage = () => (
  <>
    <SEO title="Opinion" />
    <ArticleList featuredPost={featuredPost.opinion} page="opinion" limit={3} />
  </>
)

export default OpinionPage
