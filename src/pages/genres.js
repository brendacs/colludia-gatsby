import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"

const GenresPage = () => (
  <>
    <SEO title="Genres" />
    <ArticleList page="genres" />
  </>
)

export default GenresPage
