import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Dropdown from "./dropdown"
import Tag from "./tag"
import {
  tagColors,
  reviewPageDropdownOptions,
  genresPageArticleTypeDropdownOptions,
  getDropdownOptionsFromCategories,
} from "../constants"
import "./rendered-posts.scss"
import "./genres.scss"

// TODO: dropdown functionality
const RenderedPosts = ({
  data,
  page,
  author,
  categories,
  // tags,
  sortable,
  limit,
}) => {
  const [dateSortType, setDateSortType] = useState("publishDate")
  const [genreFilter, setGenreFilter] = useState("all")
  let count = 0
  let posts = data.allMarkdownRemark.edges

  return (
    <div className={page || (author && "author-page")}>
      {page === "genres" && (
        <section className="all-categories">
          <Dropdown
            options={genresPageArticleTypeDropdownOptions}
            onSelect={val => setGenreFilter(val)}
          />
          <Dropdown
            options={getDropdownOptionsFromCategories(categories)}
            onSelect={val => setGenreFilter(val)}
          />
        </section>
      )}
      <section
        className={`posts-container ${author && "posts-container-author"}`}
      >
        {sortable && (
          <Dropdown
            options={reviewPageDropdownOptions}
            onSelect={setDateSortType}
          />
        )}
        <div className="posts">
          {posts
            .filter(p => {
              if (author) return p.node.frontmatter.author === author
              if (page === "genres" && genreFilter !== "all") {
                return p.node.frontmatter.categories.includes(genreFilter)
              }
              return p
            })
            .sort((a, b) => {
              if (!sortable || dateSortType === "publishDate") {
                return 0
              }
              const ard = a.node.frontmatter.releaseDate
              const brd = b.node.frontmatter.releaseDate
              return ard > brd ? -1 : 1
            })
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
                  <Link
                    className={`post ${
                      (count > limit || page === "genres") && "row"
                    }`}
                    to={post.slug}
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
                  </Link>
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
