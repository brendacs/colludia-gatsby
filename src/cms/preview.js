import React from "react"
import ReactMarkdown from "react-markdown"

const Preview = ({ data }) => {
  const markdown = data.body || ""

  return (
    <div className="article">
      <h1
        className="article-title"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <p>{data.author}</p>
      <ReactMarkdown source={markdown} />
    </div>
  )
}

export default Preview
