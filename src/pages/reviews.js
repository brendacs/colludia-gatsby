import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import { featuredPost } from "../data/featured-posts"

const ReviewsPage = () => (
  <>
    <SEO title="Reviews" page="review" />
    <ArticleList featuredPost={featuredPost.review} page="review" sortable />
  </>
)

export default ReviewsPage
