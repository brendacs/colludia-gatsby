import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import featuredPost from "../data/featured-posts.json"

const SpotlightPage = () => (
  <>
    <SEO title="Developer Spotlights" page="spotlight" />
    <ArticleList
      featuredPost={featuredPost.spotlight}
      page="spotlight"
      limit={3}
    />
  </>
)

export default SpotlightPage
