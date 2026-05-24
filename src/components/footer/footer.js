import { Link } from "gatsby"
import React from "react"
import SocialButtons from "../common-ui/share-buttons"
import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <Link className="footer-logo" to="/" name="indie story games home">
          <img
            alt="indie story games logo"
            src={require("../../images/gamepad-book.webp")}
          />
          <b>Indie Story Games</b>
        </Link>
        <p>
          A small, lovingly run corner of the internet for narrative-driven
          indie games and the people who make them.
        </p>
        <div className="footer-socials">
          <SocialButtons />
        </div>
      </div>

      <div className="footer-col">
        <h4>Sections</h4>
        <Link to="/">Latest</Link>
        <Link to="/news">News</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/dev-spotlights">Dev Spotlights</Link>
        <Link to="/our-picks">Our Picks</Link>
        <Link to="/opinion">Opinion</Link>
      </div>

      <div className="footer-col">
        <h4>Explore</h4>
        <Link to="/genres">All Genres</Link>
        <Link to="/steam-keys">Free Keys</Link>
        <Link to="/subscribe">Subscribe</Link>
        <Link to="/supporters">Our Supporters</Link>
      </div>

      <div className="footer-col">
        <h4>About</h4>
        <Link to="/about">Our Story</Link>
        <Link to="/writers">Write for Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/ads">Advertise</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/cookie-policy">Cookie Policy</Link>
      </div>
    </div>

    <div className="footer-bottom">
      <span>
        Copyright &copy; {new Date().getFullYear()} Indie Story Games. All
        Rights Reserved.
      </span>
      <span className="footer-made">
        made with ♡ by brenda
      </span>
    </div>
  </footer>
)

export default Footer
