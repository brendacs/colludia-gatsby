// import { Link } from 'gatsby'
import React from 'react'
import './layered-nav.scss'

const LayeredNav = () => {
  const { pathname } = window.location

  return (
    <nav className="layered-nav">
      <ul className="layered-nav-items">
        <a className={`layered-nav-item ${pathname === '/' && 'active'}`} href="/">Latest</a>
        <a className={`layered-nav-item ${pathname === '/reviews' && 'active'}`} href="/reviews">Reviews</a>
        <a className={`layered-nav-item ${pathname === '/dev-spotlights' && 'active'}`} href="/dev-spotlights">Dev Spotlights</a>
        <a className={`layered-nav-item ${pathname === '/our-picks' && 'active'}`} href="/our-picks">Our Picks</a>
        <a className={`layered-nav-item ${pathname === '/opinion' && 'active'}`} href="/opinion">Opinion</a>
        <a className={`layered-nav-item ${pathname === '/genres' && 'active'}`} href="/genres">All Genres</a>
      </ul>
      <button id="darkmode-button" className="action" name="darkmode"> MODE </button>
    </nav>
  )
}

export default LayeredNav
