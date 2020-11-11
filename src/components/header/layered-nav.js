import { Link } from "gatsby"
import React from "react"
import "./layered-nav.scss"

const LayeredNav = () => {
  return (
    <nav className="layered-nav">
      <ul className="layered-nav-items">
        <Link className="layered-nav-item" activeClassName="active" to="/">
          Latest
        </Link>
        <Link
          className="layered-nav-item"
          activeClassName="active"
          to="/reviews"
        >
          Reviews
        </Link>
        <Link
          className="layered-nav-item"
          activeClassName="active"
          to="/dev-spotlights"
        >
          Dev Spotlights
        </Link>
        <Link
          className="layered-nav-item"
          activeClassName="active"
          to="/our-picks"
        >
          Our Picks
        </Link>
        <Link
          className="layered-nav-item"
          activeClassName="active"
          to="/opinion"
        >
          Opinion
        </Link>
        <Link
          className="layered-nav-item"
          activeClassName="active"
          to="/genres"
        >
          All Genres
        </Link>
      </ul>
      <button id="darkmode-button" className="action" name="darkmode">
        {" "}
        MODE{" "}
      </button>
    </nav>
  )
}

export default LayeredNav
