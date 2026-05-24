import { Link } from "gatsby"
import React from "react"
import SocialButtons from "../common-ui/share-buttons"
import "./dropdown-nav.scss"

const DropdownNav = ({ onLinkClick }) => (
  <div className="dropdown-nav">
    <div className="dropdown-nav-grid">
      <div className="dropdown-nav-col hidden">
        <h4>Sections</h4>
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
      </div>

      <div className="dropdown-nav-col">
        <h4>Explore</h4>
        <Link to="/about" onClick={onLinkClick}>
          About Us
        </Link>
        <Link to="/supporters" onClick={onLinkClick}>
          Supporters
        </Link>
        <Link to="/steam-keys" onClick={onLinkClick}>
          Free Keys
        </Link>
      </div>

      <div className="dropdown-nav-col">
        <h4>Get in Touch</h4>
        <Link to="/contact" onClick={onLinkClick}>
          Contact Us
        </Link>
        <Link to="/writers" onClick={onLinkClick}>
          Become a Writer
        </Link>
        <Link to="/ads" onClick={onLinkClick}>
          Advertise
        </Link>
      </div>
    </div>

    <div className="dropdown-nav-socials">
      <SocialButtons />
    </div>
  </div>
)

export default DropdownNav
