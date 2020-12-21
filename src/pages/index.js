import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"
import { featuredPost } from "../data/featured-posts"

const IndexPage = () => (
  <>
    <SEO title="Home" page="latest" />
    <ArticleList featuredPost={featuredPost.latest} page="latest" />
    <script
      dangerouslySetInnerHTML={{
        __html: `if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }`,
      }}
    />
  </>
)

export default IndexPage
