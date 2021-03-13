import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import featuredPost from "../data/featured-posts.json"

const NewsPage = () => (
  <>
    <SEO title="News" />
    <ArticleList featuredPost={featuredPost.news} page="news" limit={3} />
  </>
)

export default NewsPage
