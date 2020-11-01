// import { Link } from 'gatsby'
import React from 'react'
import './dropdown-nav.scss'

const DropdownNav = () => (
  <div className="secondary-nav">
    <div className="pages-wrapper">
      <ul className="main hidden">
        <li><a href="/">Latest Articles</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <li><a href="/dev-spotlights">Dev Spotlights</a></li>
        <li><a href="/our-picks">Our Picks</a></li>
        <li><a href="/opinion">Opinion</a></li>
        <li><a href="/genres">All Genres</a></li>
      </ul>
      <ul>
        <li><a className="animated-link" href="/about">About Us</a></li>
        <li><a className="animated-link" href="/supporters">Supporters</a></li>    
        <li><a className="animated-link" href="/steam-keys">Free Keys</a></li>
      </ul>
      <ul>
        <li><a className="animated-link" href="/contact">Contact Us</a></li>
        <li><a className="animated-link" href="/writers">Become a Writer</a></li>
        <li><a className="animated-link" href="/advertise">Advertise</a></li>
      </ul>
    </div>
    <div>
      <div className="share-buttons">
        <li><a className="steam" href="https://store.steampowered.com/curator/37254837/" name="steam curator"><img alt="steam logo" src={require('../../images/steam.png')} /></a></li>
        <li><a className="twitter" href="https://twitter.com/colludia" name="colludia twitter"><img alt="twitter logo" src={require('../../images/twitter.svg')} /></a></li>
      </div>
      <div className="share-buttons">
        <li><a className="patreon" href="https://patreon.com/colludia" name="colludia patreon"><img alt="patreon logo" src={require('../../images/patreon.png')} /></a></li>
        <li><a className="discord" href="https://discord.gg/PG2qkZf" name="colludia discord server"><img alt="discord logo" src={require('../../images/discord.png')} /></a></li>
      </div>
    </div>
  </div>
)

export default DropdownNav
