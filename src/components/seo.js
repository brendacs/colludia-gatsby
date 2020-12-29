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
import { pageDescriptions } from "./constants"

function SEO({ lang, meta, title, description, author, image, page, type }) {
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

  const pageDescription =
    pageDescriptions[page || title.toLowerCase()] &&
    `${pageDescriptions.default} ${
      pageDescriptions[page || title.toLowerCase()]
    }`

  const metaDescription =
    description || pageDescription || site.siteMetadata.description
  const metaAuthor = author || site.siteMetadata.author
  const metaType = type || "website"

  // convert image extension from webp -> png
  if (image) {
    let imageStrings = image.split(".")
    let imagePath = imageStrings[0]
    let ext = imageStrings[1]

    if (ext === "webp") {
      image = imagePath + ".png"
    }
  }

  const metaImage = `https://indiestorygames.com/images/${
    image || "colludia-banner-big.webp"
  }`

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
          name: "type",
          content: metaType,
        },
        {
          property: "og:site_name",
          content: "Indie Story Games",
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
          content: metaType,
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
          content: "@indiestorygames",
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
