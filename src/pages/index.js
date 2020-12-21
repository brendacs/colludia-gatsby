import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import { featuredPost } from "../data/featured-posts"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Helmet>
    <SEO title="Home" page="latest" />
    <ArticleList featuredPost={featuredPost.latest} page="latest" />
  </>
)

export default IndexPage
