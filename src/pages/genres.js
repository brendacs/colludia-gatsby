import React from "react"
import SEO from "../components/seo"
import ArticleList from "../components/layouts/article-list/article-list"

const GenresPage = ({ data }) => (
  <>
    <SEO title="Genres" />
    <ArticleList
      page="genres"
      categories={data.categories.group}
      tags={data.tags.group}
    />
  </>
)

export default GenresPage

export const pageQuery = graphql`
  query {
    categories: allMarkdownRemark {
      group(field: frontmatter___categories) {
        category: fieldValue
        totalCount
      }
    }
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
