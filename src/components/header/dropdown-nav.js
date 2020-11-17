import { Link } from "gatsby"
import React from "react"
import "./dropdown-nav.scss"

const DropdownNav = () => (
  <div className="secondary-nav">
    <div className="pages-wrapper">
      <ul className="main hidden">
        <li>
          <Link href="/">Latest Articles</Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li>
          <Link href="/dev-spotlights">Dev Spotlights</Link>
        </li>
        <li>
          <Link href="/our-picks">Our Picks</Link>
        </li>
        <li>
          <Link href="/opinion">Opinion</Link>
        </li>
        <li>
          <Link href="/genres">All Genres</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link className="animated-link" href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="animated-link" href="/supporters">
            Supporters
          </Link>
        </li>
        <li>
          <Link className="animated-link" href="/steam-keys">
            Free Keys
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link className="animated-link" href="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="animated-link" href="/writers">
            Become a Writer
          </Link>
        </li>
        <li>
          <Link className="animated-link" href="/ads">
            Advertise
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <div className="share-buttons">
        <li>
          <a
            className="steam"
            href="https://store.steampowered.com/curator/37254837/"
            name="steam curator"
          >
            <img alt="steam logo" src={require("../../images/steam.png")} />
          </a>
        </li>
        <li>
          <a
            className="twitter"
            href="https://twitter.com/colludia"
            name="colludia twitter"
          >
            <img alt="twitter logo" src={require("../../images/twitter.svg")} />
          </a>
        </li>
      </div>
      <div className="share-buttons">
        <li>
          <a
            className="patreon"
            href="https://patreon.com/colludia"
            name="colludia patreon"
          >
            <img alt="patreon logo" src={require("../../images/patreon.png")} />
          </a>
        </li>
        <li>
          <a
            className="discord"
            href="https://discord.gg/PG2qkZf"
            name="colludia discord server"
          >
            <img alt="discord logo" src={require("../../images/discord.png")} />
          </a>
        </li>
      </div>
    </div>
  </div>
)

export default DropdownNav
