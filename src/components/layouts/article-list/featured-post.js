// import { Link } from 'gatsby'
import PropTypes from "prop-types"
import React from "react"
import "./featured-post.scss"

const FeaturedPost = ({ featuredPost, tooltip }) => (
  <section className={`featured ${featuredPost.type}`}>
    <a
      className="featured-post"
      href={featuredPost.url}
      name="navigate to featured post"
    >
      <div className="featured-text-container">
        <div className="subtitle-wrapper">
          <h1 className="featured-subtitle">Featured Article</h1>
          <div className="featured-icon-wrapper">
            <span className="featured-icon">?</span>
            <div className="featured-tooltip">{tooltip}</div>
          </div>
        </div>
        <h2 className="featured-title">{featuredPost.title}</h2>
        <h3 className="featured-tagline">{featuredPost.tagline}</h3>
      </div>
      <img
        alt="game header image"
        className="featured-image"
        src={require(`../../../images/headers/${featuredPost.image}`)}
      />
      {featuredPost.type !== "spotlight" && (
        <img
          alt="game header image"
          className="featured-image-side"
          src={require(`../../../images/headers/${featuredPost.image}`)}
        />
      )}
    </a>
  </section>
)

FeaturedPost.propTypes = {
  featuredPost: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  tooltip: PropTypes.string.isRequired,
}

export default FeaturedPost
