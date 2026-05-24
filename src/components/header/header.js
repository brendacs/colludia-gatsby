import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./header.scss"
import DropdownNav from "./dropdown-nav"

const Header = ({ siteTitle }) => {
  const [showDropdownNav, setShowDropdownNav] = useState(false)

  return (
    <header>
      <nav className="main-nav">
        <div className="main-nav-navigation">
          <Link className="main-nav-logo" to="/" name="indie story games home">
            <img
              alt="indie story games logo"
              src={require("../../images/gamepad-book.webp")}
            />
            <span className="name">
              {siteTitle}
              <span className="brand-sublabel">
                Cozy &middot; Narrative &middot; Heartfelt
              </span>
            </span>
            <span className="name short-title">ISG</span>
          </Link>
        </div>

        <div className="main-nav-actions">
          <Link className="action" to="/subscribe" name="subscribe">
            <button name="subscribe" className="subscribe-button">
              <img
                alt="email envelope"
                src={require("../../images/email.svg")}
              />
              <p className="subscribe-text">Subscribe</p>
            </button>
          </Link>
          <div
            className={`ham-menu-wrapper action${
              showDropdownNav ? " open" : ""
            }`}
            role="button"
            aria-label="menu"
            aria-expanded={showDropdownNav}
            tabIndex={0}
            onClick={() => setShowDropdownNav(!showDropdownNav)}
            onKeyDown={() => setShowDropdownNav(!showDropdownNav)}
          >
            <svg
              className="ham-menu"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="5" y1="8" x2="21" y2="8" />
              <line x1="5" y1="13" x2="21" y2="13" />
              <line x1="5" y1="18" x2="21" y2="18" />
            </svg>
          </div>
        </div>
      </nav>
      {showDropdownNav && (
        <DropdownNav
          onLinkClick={() => {
            setShowDropdownNav(false)
          }}
        />
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
