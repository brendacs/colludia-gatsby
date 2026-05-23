import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./featured-post.scss"

const FeaturedPost = ({ featuredPost }) => (
  <section className={`featured ${featuredPost.type}`}>
    <div className="featured-wrap">
      <Link
        className="featured-post"
        to={featuredPost.url}
        name="navigate to featured post"
      >
        <img
          alt="header game screenshot"
          className="featured-image"
          src={require(`../../../images/headers/${featuredPost.image}`)}
        />
        <div className="featured-inner">
          <div className="featured-text-container">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span>Featured Story
            </span>
            <h2 className="featured-title">{featuredPost.title}</h2>
            <h3 className="featured-tagline">{featuredPost.tagline}</h3>
            <span className="featured-cta">
              Read the story
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
          {featuredPost.type !== "spotlight" && (
            <div className="featured-frame-wrapper">
              <div className="featured-frame">
                <span className="featured-pin"></span>
                <img
                  alt="featured game screenshot"
                  className="featured-image-side"
                  src={require(`../../../images/headers/${featuredPost.image}`)}
                />
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
    <div className="featured-divider">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" fill="none">
        <path
          d="M0 60c180-44 320 26 540 18s360-58 560-34 240 50 340 36v30H0z"
          className="hill-1"
        />
        <path
          d="M0 70c200-34 360 22 560 14s380-44 600-22 180 36 280 28v20H0z"
          className="hill-2"
        />
      </svg>
    </div>
  </section>
)

FeaturedPost.propTypes = {
  featuredPost: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  tooltip: PropTypes.string,
}

export default FeaturedPost
