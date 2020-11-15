import React from "react"
import { graphql } from "gatsby"
import "./info.scss"

const InfoTemplate = ({ data }) => {
  // this prop will be injected by the GraphQL query below
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default InfoTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        pageType
        slug
      }
    }
  }
`
