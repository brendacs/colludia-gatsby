import React from "react"
import SEO from "../../components/seo"
import ArticleList from "../../components/layouts/article-list/article-list"
import { featuredPost } from "../../data/featured-posts"

const ShortPage = () => (
  <>
    <SEO title="Short &amp; Sweet Reviews" page="review" />
    <ArticleList
      featuredPost={featuredPost.review}
      page="review"
      subpage="short"
      sortable
    />
  </>
)

export default ShortPage
