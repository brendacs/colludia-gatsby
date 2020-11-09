// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import React, { useState } from 'react'
import Tag from '../../common/tag'
import { tagColors } from '../../componentConstants'
import './posts.scss'


// TODO: implement sort
const Posts = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
              node {
                id
                excerpt(pruneLength: 100)
                frontmatter {
                  pageType
                  game
                  slug
                  title
                  postType
                  desc
                  tagline
                  date(formatString: "MMMM DD, YYYY")
                  releaseDate(formatString: "MMMM DD, YYYY")
                  image
                  author
                }
              }
            }
          }
        }
      `}
      render={data => <RenderedPosts data={data} {...props} />}
    />
  )
}

const RenderedPosts = ({ data, page, sortable, limit }) => {
  const [sorted, setSorted] = useState(false)
  let count = 0;
  let posts = data.allMarkdownRemark.edges

  return (
    <section className="posts-container">
      {sortable &&
        <select className="dropdown article-list-dropdown" id="sort-select-list">
          <option value="" disabled>Sort articles by</option>
          <option value="article" selected onSelect={() => setSorted(false)}>Most recent article</option>
          <option value="release" onSelect={() => setSorted(true)}>Most recent game release date</option>
        </select>
      }
      <div className="posts">
        {posts.map(p => {
          let post = p.node.frontmatter
          if ((page === 'latest' || post.postType.includes(page))) {
            count += 1
          }
          return (
            (page === 'latest' || post.postType.includes(page)) &&
            <a className={`post ${count > limit && 'row'}`} href={post.slug} name={`navigate to post titled ${post.title}`}>
              <img alt="game header image" className="post-image" loading="lazy" src={require(`../../../images/headers/small/${post.image}`)} />
              <div className="post-text-container">
                <h2 className="post-title" dangerouslySetInnerHTML={{ __html: post.title }} />
                <div className="post-info">
                  <p className="post-author">{post.author}</p>
                  <p className="post-date">{post.date}</p>
                </div>
              </div>
              <div className="post-type">
                {post.postType.map((tag) => (
                  <Tag name={tag} color={tagColors[tag]} />
                ))}
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string,
    image: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired,
  page: PropTypes.string.isRequired,
  sortable: PropTypes.bool,
  limit: PropTypes.number
}

Posts.defaultProps = {
  sortable: false,
  limit: 12
}

export default Posts
