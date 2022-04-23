import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Dropdown from "./dropdown"
import Tag from "./tag"
import {
  months,
  tagColors,
  reviewPageDropdownOptions,
  genresPageArticleTypeDropdownOptions,
  getDropdownOptionsFromCategories,
} from "../constants"
import "./rendered-posts.scss"
import { getPostDateComponents, isCurrDateGreater } from "../utils/dates"
import {
  getLocalePath,
  localeSupported,
  postLocaleMatch,
} from "../../../i18n/utils"
import { isBrowser } from "../../../utils/browser"

const RenderedPosts = ({
  data,
  page,
  subpage,
  author,
  categories,
  sortable,
  limit,
}) => {
  const localePath =
    isBrowser() &&
    localeSupported(navigator.language) &&
    navigator.language !== "en"
      ? `/${navigator.language}`
      : getLocalePath()
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
              let post = p.node.frontmatter
              const [day, month, year] = getPostDateComponents(post)
              let shouldPublish =
                isCurrDateGreater([day, month, year]) && postLocaleMatch(post)
              if (shouldPublish) {
                if (author) return post.author === author
                if (page === "genres" && genreFilter !== "all") {
                  return post.categories.includes(genreFilter)
                }
                return true
              }
            })
            .sort((a, b) => {
              if (!sortable || dateSortType === "publishDate") {
                const apd = a.node.frontmatter.date
                const bpd = b.node.frontmatter.date
                return apd > bpd ? -1 : 1
              }
              const ard = a.node.frontmatter.releaseDate
              const brd = b.node.frontmatter.releaseDate
              return ard > brd ? -1 : 1
            })
            .map((p, idx) => {
              let post = p.node.frontmatter
              const [day, month, year] = getPostDateComponents(post)
              if (
                page === "latest" ||
                page === "genres" ||
                (post.postType.includes(page) &&
                  (!subpage || post.postType.includes(subpage)))
              ) {
                count += 1
              }
              return (
                (author ||
                  page === "latest" ||
                  page === "genres" ||
                  (post.postType.includes(page) &&
                    (!subpage || post.postType.includes(subpage)))) && (
                  <Link
                    className={`post ${
                      (count > limit || page === "genres") && "row"
                    }`}
                    to={`${localePath}${post.slug}`}
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
                        <p className="post-date">{`${
                          months[month - 1]
                        } ${day}, ${year}`}</p>
                      </div>
                    </div>
                    <div className="post-type">
                      {post.postType.map((tag, idx) => (
                        <Tag
                          name={`${tag === "picks" ? "our " : ""}${tag}`}
                          key={idx}
                          color={tagColors[tag]}
                        />
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
