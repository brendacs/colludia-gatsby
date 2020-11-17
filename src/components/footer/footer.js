import { Link } from "gatsby"
import React from "react"
import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer-links-wrapper">
      <ul className="footer-links">
        <li>
          <Link className="animated-link" to="/about">
            About Colludia
          </Link>
        </li>
        <li>
          <Link className="animated-link" to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="animated-link" to="/writers">
            Become a Writer
          </Link>
        </li>
        <li>
          <Link className="animated-link" to="/ads">
            Advertise
          </Link>
        </li>
      </ul>
      <ul className="footer-links">
        <li>
          <Link className="animated-link" to="/supporters">
            Our Supporters
          </Link>
        </li>
        <li>
          <Link className="animated-link" to="/subscribe">
            Subscribe
          </Link>
        </li>
        <li>
          <Link className="animated-link" to="/privacy-policy">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link className="animated-link" to="/cookie-policy">
            Cookie Policy
          </Link>
        </li>
      </ul>
    </div>
    <div className="footer-social">
      <ul className="share-buttons">
        <li>
          <a
            className="steam"
            href="https://store.steampowered.com/curator/37254837/"
            name="steam curator page"
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
      </ul>
      <p className="copyright">
        Copyright &copy; 2020 Colludia. All Rights Reserved.
      </p>
    </div>
  </footer>
)

export default Footer
