import { Link } from "gatsby"
import React from "react"
import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer-links-wrapper">
      <div className="footer-links">
        <Link className="animated-link" to="/about">
          About Colludia
        </Link>
        <Link className="animated-link" to="/contact">
          Contact Us
        </Link>
        <Link className="animated-link" to="/writers">
          Become a Writer
        </Link>
        <Link className="animated-link" to="/ads">
          Advertise
        </Link>
      </div>
      <div className="footer-links">
        <Link className="animated-link" to="/supporters">
          Our Supporters
        </Link>
        <Link className="animated-link" to="/subscribe">
          Subscribe
        </Link>
        <Link className="animated-link" to="/privacy-policy">
          Privacy Policy
        </Link>
        <Link className="animated-link" to="/cookie-policy">
          Cookie Policy
        </Link>
      </div>
    </div>
    <div className="footer-social">
      <div className="share-buttons">
        <a
          className="steam"
          href="https://store.steampowered.com/curator/37254837/"
          name="steam curator page"
        >
          <img alt="steam logo" src={require("../../images/steam.webp")} />
        </a>
        <a
          className="twitter"
          href="https://twitter.com/colludia"
          name="colludia twitter"
        >
          <img alt="twitter logo" src={require("../../images/twitter.svg")} />
        </a>
        <a
          className="patreon"
          href="https://patreon.com/colludia"
          name="colludia patreon"
        >
          <img alt="patreon logo" src={require("../../images/patreon.webp")} />
        </a>
        <a
          className="discord"
          href="https://discord.gg/PG2qkZf"
          name="colludia discord server"
        >
          <img alt="discord logo" src={require("../../images/discord.webp")} />
        </a>
      </div>
      <p className="copyright">
        Copyright &copy; 2020 Colludia. All Rights Reserved.
      </p>
    </div>
  </footer>
)

export default Footer
