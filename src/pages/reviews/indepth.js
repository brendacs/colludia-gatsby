import React from "react"
import SEO from "../../components/seo"
import ArticleList from "../../components/layouts/article-list/article-list"
import featuredPost from "../../data/featured-posts.json"

const IndepthPage = () => (
  <>
    <SEO title="In-Depth Reviews" page="review" />
    <ArticleList
      featuredPost={featuredPost.review}
      page="review"
      subpage="in-depth"
      sortable
    />
  </>
)

export default IndepthPage
