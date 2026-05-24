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
import { useLocation } from "@reach/router"
import { pageDescriptions } from "./constants"

// Structured-data references shared across schemas.
const ORG_ID = "https://indiestorygames.com/#organization"
const WEBSITE_ID = "https://indiestorygames.com/#website"
const ORG_LOGO = "https://indiestorygames.com/images/gamepad-book-square.png"
const SOCIAL_PROFILES = [
  "https://twitter.com/lofi_and_",
  "https://discord.gg/PG2qkZf",
  "https://store.steampowered.com/curator/37254837/",
]

function SEO({
  lang,
  meta,
  title,
  description,
  author,
  image,
  page,
  type,
  datePublished,
  dateModified,
}) {
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

  const { pathname } = useLocation()

  const defaultTitle = site.siteMetadata.title
  const defaultUrl = site.siteMetadata.siteUrl

  // The page's own URL — used for canonical + og:url so every page points
  // to itself rather than the site root.
  const canonicalUrl = `${defaultUrl}${pathname || "/"}`

  const pageDescription =
    pageDescriptions[page || title.toLowerCase()] &&
    `${pageDescriptions.default} ${pageDescriptions[page || title.toLowerCase()]
    }`

  const metaDescription =
    description || pageDescription || site.siteMetadata.description
  const metaAuthor = author || site.siteMetadata.author
  const metaType = type || "website"
  const isArticle = metaType === "article"

  // convert image extension from webp -> png
  if (image) {
    let imageStrings = image.split(".")
    let imagePath = imageStrings[0]
    let ext = imageStrings[1]

    if (ext === "webp") {
      image = imagePath + ".png"
    }
  }

  const metaImage = `https://indiestorygames.com/images/${image || "isg-banner.png"
    }`

  // Site-wide Organization + WebSite graph, present on every page.
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Indie Story Games",
        url: defaultUrl,
        logo: {
          "@type": "ImageObject",
          url: ORG_LOGO,
        },
        sameAs: SOCIAL_PROFILES,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: defaultTitle,
        url: defaultUrl,
        description: site.siteMetadata.description,
        publisher: { "@id": ORG_ID },
      },
    ],
  }

  // Per-article Article schema (only on post pages).
  const articleSchema = isArticle && {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: title,
    description: metaDescription,
    image: [metaImage],
    author: {
      "@type": "Person",
      name: metaAuthor,
    },
    publisher: { "@id": ORG_ID },
    ...(datePublished && { datePublished }),
    dateModified: dateModified || datePublished,
  }

  const articleMeta = isArticle
    ? [
      ...(datePublished
        ? [{ property: "article:published_time", content: datePublished }]
        : []),
      ...(dateModified || datePublished
        ? [
          {
            property: "article:modified_time",
            content: dateModified || datePublished,
          },
        ]
        : []),
      { property: "article:author", content: metaAuthor },
    ]
    : []

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
          property: "og:type",
          content: metaType,
        },
        {
          property: "og:url",
          content: canonicalUrl,
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
          content: "@indiestorygames",
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
      ]
        .concat(articleMeta)
        .concat(meta)}
    >
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(siteSchema)}</script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  title: "Home",
  description: null,
  image: null,
}

export default SEO
