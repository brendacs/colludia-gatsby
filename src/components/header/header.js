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
          <Link className="main-nav-logo" to="/" name="colludia home">
            <img
              alt="colludia logo"
              src={require("../../images/gamepad-book.webp")}
            />
            <h1 className="name">{siteTitle}</h1>
            <h1 className="name short-title">ISG</h1>
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
            className="ham-menu-wrapper action"
            role="button"
            tabIndex={0}
            onClick={() => setShowDropdownNav(!showDropdownNav)}
            onKeyDown={() => setShowDropdownNav(!showDropdownNav)}
          >
            <img
              alt="hamburger menu"
              className="ham-menu"
              src={require("../../images/menu.svg")}
            />
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
