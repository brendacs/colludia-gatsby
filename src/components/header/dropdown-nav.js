import { Link } from "gatsby"
import React from "react"
import SocialButtons from "../common-ui/share-buttons"
import "./dropdown-nav.scss"

const DropdownNav = ({ onLinkClick }) => (
  <div className="secondary-nav">
    <div className="pages-wrapper">
      <ul className="main hidden">
        <Link to="/" onClick={onLinkClick}>
          Latest Articles
        </Link>
        <Link to="/reviews" onClick={onLinkClick}>
          Reviews
        </Link>
        <Link to="/dev-spotlights" onClick={onLinkClick}>
          Dev Spotlights
        </Link>
        <Link to="/our-picks" onClick={onLinkClick}>
          Our Picks
        </Link>
        <Link to="/opinion" onClick={onLinkClick}>
          Opinion
        </Link>
        <Link to="/genres" onClick={onLinkClick}>
          All Genres
        </Link>
      </ul>
      <ul>
        <Link className="animated-link" to="/about" onClick={onLinkClick}>
          About Us
        </Link>
        <Link className="animated-link" to="/supporters" onClick={onLinkClick}>
          Supporters
        </Link>
        <Link className="animated-link" to="/steam-keys" onClick={onLinkClick}>
          Free Keys
        </Link>
      </ul>
      <ul>
        <Link className="animated-link" to="/contact" onClick={onLinkClick}>
          Contact Us
        </Link>
        <Link className="animated-link" to="/writers" onClick={onLinkClick}>
          Become a Writer
        </Link>
        <Link className="animated-link" to="/ads" onClick={onLinkClick}>
          Advertise
        </Link>
      </ul>
    </div>
    <div>
      <SocialButtons />
    </div>
  </div>
)

export default DropdownNav
