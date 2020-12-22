import CMS from "netlify-cms-app"
import React from "react"
import Preview from "./preview"
import "./preview.scss"

const PostPreview = ({ entry }) => {
  const data = {
    author: entry.getIn(["data", "author"]),
    body: entry.getIn(["data", "body"]),
    categories: entry.getIn(["data", "categories"]),
    date: entry.getIn(["data", "date"]),
    image: entry.getIn(["data", "image"]),
    postType: entry.getIn(["data", "postType"]),
    slug: entry.getIn(["data", "slug"]),
    tagline: entry.getIn(["data", "tagline"]),
    tags: entry.getIn(["data", "tags"]),
    title: entry.getIn(["data", "title"]),
    video: entry.getIn(["data", "video"]),
  }

  return <Preview data={data} />
}

CMS.registerPreviewTemplate("post", PostPreview)
