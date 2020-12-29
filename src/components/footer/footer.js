import { Link } from "gatsby"
import React from "react"
import SocialButtons from "../common-ui/share-buttons"
import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer-links-wrapper">
      <div className="footer-links">
        <Link className="animated-link" to="/about">
          About Indie Story Games
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
      <SocialButtons />
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} Indie Story Games. All
        Rights Reserved.
      </p>
    </div>
  </footer>
)

export default Footer
