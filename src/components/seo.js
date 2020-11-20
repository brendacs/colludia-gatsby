/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta, title, description, author, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const defaultTitle = site.siteMetadata.title
  const defaultUrl = site.siteMetadata.siteUrl

  const metaDescription = description || site.siteMetadata.description
  const metaAuthor = author || site.siteMetadata.author
  const metaImage =
    image || require("../images/headers/colludia-banner-big.png")

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: "title",
          content: title,
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "author",
          content: metaAuthor,
        },
        {
          name: "image",
          content: metaImage,
        },
        {
          name: "thumbnail",
          content: metaImage,
        },
        {
          property: "og:site_name",
          content: "Colludia",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: defaultUrl,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@colludia",
        },
        {
          name: "twitter:creator",
          content: metaAuthor,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:image",
          content: metaImage,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  title: "Home",
  description: null,
  image: null,
}

export default SEO
