// import { Link } from 'gatsby'
import PropTypes from "prop-types"
import React, { useState } from "react"
import Tag from "./tag"
import GenresDropdowns from "./genres-dropdowns"
import { tagColors } from "../constants"
import "./rendered-posts.scss"

// TODO: dropdowns
const RenderedPosts = ({ data, page, author, sortable, limit }) => {
  const [sorted, setSorted] = useState(false)
  let count = 0
  let posts = data.allMarkdownRemark.edges

  return (
    <div className={page || (author && "author-page")}>
      {page === "genres" && <GenresDropdowns />}
      <section
        className={`posts-container ${author && "posts-container-author"}`}
      >
        {sortable && (
          <select
            className="dropdown article-list-dropdown"
            id="sort-select-list"
          >
            <option defaultValue="article" disabled>
              Sort articles by
            </option>
            <option value="article" onSelect={() => setSorted(false)}>
              Most recent article
            </option>
            <option value="release" onSelect={() => setSorted(true)}>
              Most recent game release date
            </option>
          </select>
        )}
        <div className="posts">
          {posts
            .filter(p => (author ? p.node.frontmatter.author === author : p))
            .map((p, idx) => {
              let post = p.node.frontmatter
              if (
                page === "latest" ||
                page === "genres" ||
                post.postType.includes(page)
              ) {
                count += 1
              }
              return (
                (author ||
                  page === "latest" ||
                  page === "genres" ||
                  post.postType.includes(page)) && (
                  <a
                    className={`post ${count > limit && "row"}`}
                    href={post.slug}
                    name={`navigate to post titled ${post.title}`}
                    key={idx}
                  >
                    <img
                      alt="header game screenshot"
                      className="post-image"
                      loading="lazy"
                      src={require(`../../images/headers/small/${post.image}`)}
                    />
                    <div className="post-text-container">
                      <h2
                        className="post-title"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                      <div className="post-info">
                        <p className="post-author">{post.author}</p>
                        <p className="post-date">{post.date}</p>
                      </div>
                    </div>
                    <div className="post-type">
                      {post.postType.map((tag, idx) => (
                        <Tag name={tag} key={idx} color={tagColors[tag]} />
                      ))}
                    </div>
                  </a>
                )
              )
            })}
        </div>
      </section>
    </div>
  )
}

RenderedPosts.propTypes = {
  page: PropTypes.string,
  sortable: PropTypes.bool,
  limit: PropTypes.number,
}

RenderedPosts.defaultProps = {
  page: "",
  sortable: false,
  limit: 12,
}

export default RenderedPosts
