import React from "react"
import SEO from "../../components/seo"
import ArticleList from "../../components/layouts/article-list/article-list"
import featuredPost from "../../data/featured-posts.json"

const ShortPage = () => (
  <>
    {console.log(featuredPost)}
    <SEO title="Short &amp; Sweet Reviews" page="review" />
    <ArticleList
      featuredPost={featuredPost.short}
      page="review"
      subpage="short"
      sortable
    />
  </>
)

export default ShortPage
