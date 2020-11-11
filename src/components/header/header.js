import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import SubscribeBtn from "./subscribe-button"
import "./header.scss"
import DropdownNav from "./dropdown-nav"

const Header = ({ siteTitle, search }) => {
  const [showDropdownNav, setShowDropdownNav] = useState(false)

  // Below is code to hide dropdown nav on scroll, but not using this UX for now

  // let throttleTimeout = null

  // const hideDropdownNavOnScroll = () => {
  //   setShowDropdownNav(false)
  //   throttleTimeout = null
  // }

  // useLayoutEffect(() => {
  //   const handleScroll = () => {
  //     if (wait) {
  //       if (throttleTimeout === null) {
  //         setTimeout(hideDropdownNavOnScroll, wait)
  //       }
  //     } else {
  //       hideDropdownNavOnScroll()
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => window.removeEventListener('scroll', handleScroll)
  // })

  return (
    <header>
      <nav className="main-nav">
        <div className="main-nav-navigation">
          <Link className="main-nav-logo" to="/" name="colludia home">
            <img
              alt="colludia logo"
              src={require("../../images/gamepad-book.png")}
            />
            <h1 className="name">
              {siteTitle}
              <span className="long-title"> Indie Games With a Story</span>
            </h1>
          </Link>
        </div>

        <div className="main-nav-actions">
          {search && (
            <button className="search-btn action" name="search">
              <img alt="search" src={require("../../images/search.svg")} />
            </button>
          )}
          <SubscribeBtn />
          <div
            className="ham-menu-wrapper action"
            role="button"
            tabIndex={0}
            onClick={() => setShowDropdownNav(!showDropdownNav)}
          >
            <img
              alt="hamburger menu"
              className="ham-menu"
              src={require("../../images/menu.svg")}
            />
          </div>
        </div>
      </nav>
      <div className="search-wrapper">
        <input
          className="search hide"
          type="search"
          placeholder="Search by title, author, or article type e.g. review"
          spellCheck="false"
        />
      </div>
      {showDropdownNav && <DropdownNav />}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  search: PropTypes.bool,
}

Header.defaultProps = {
  search: true,
}

export default Header
