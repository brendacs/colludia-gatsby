import { Link } from "gatsby"
import React from "react"
import "./layered-nav.scss"

const LayeredNav = ({ darkmode, setDarkmode }) => {
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
          partiallyActive={true}
        >
          Reviews
          <div className="dropdown-menu">
            <Link
              className="layered-nav-item"
              activeClassName="active"
              to="/reviews/indepth"
            >
              In-Depth
            </Link>
            <Link
              className="layered-nav-item"
              activeClassName="active"
              to="/reviews/short"
            >
              Short &amp; Sweet
            </Link>
          </div>
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
      <button
        id="darkmode-button"
        className="action"
        name="darkmode"
        onClick={() => {
          setDarkmode(!darkmode)
          typeof window !== `undefined` &&
            window.localStorage.setItem("darkmode", !darkmode)
        }}
      >
        MODE
      </button>
    </nav>
  )
}

export default LayeredNav
