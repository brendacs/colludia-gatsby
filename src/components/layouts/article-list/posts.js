// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import './posts.scss'


const Posts = ({ posts, sortable }) => {
  const [sorted, setSorted] = useState(false)

  return (
    <section className="posts-container">
      {sortable &&
        <select className="dropdown article-list-dropdown" id="sort-select-list">
          <option value="" disabled>Sort articles by</option>
          <option value="article" selected onSelect={() => setSorted(false)}>Most recent article</option>
          <option value="release" onSelect={() => setSorted(true)}>Most recent game release date</option>
        </select>
      }
      <div className={`posts ${sorted ? 'by-release-date' : 'by-publish-date'}`}>
        {posts.map((post) => (
          <a className="post" href={post.url} name={`navigate to post titled ${post.title}`}>
            <img alt="game header image" className="post-image" loading="lazy" src={require(`../../../images/headers/small/${post.image}`)} />
            <div className="post-text-container">
              <h2 className="post-title">{post.title}</h2>
              <div className="post-info">
                <p className="post-author">{post.author}</p>
                <p className="post-date">{post.date}</p>
              </div>
            </div>
            <div className="post-type">
              {/** tags */}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  sortable: PropTypes.bool
}

Posts.defaultProps = {
  sortable: false
}

export default Posts
