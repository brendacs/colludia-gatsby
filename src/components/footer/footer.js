import React from 'react'
import './footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="footer-links-wrapper">
      <ul className="footer-links">
        <li><a className="animated-link" href="/about">About Colludia</a></li>
        <li><a className="animated-link" href="/contact">Contact Us</a></li>
        <li><a className="animated-link" href="/writers">Become a Writer</a></li>
        <li><a className="animated-link" href="/advertise">Advertise</a></li>
      </ul>
      <ul className="footer-links">
        <li><a className="animated-link" href="/supporters">Our Supporters</a></li>
        <li><a className="animated-link" href="/subscribe">Subscribe</a></li>
        <li><a className="animated-link" href="/privacy-policy">Privacy Policy</a></li>
        <li><a className="animated-link" href="/cookie-policy">Cookie Policy</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <ul className="share-buttons">
        <li><a className="steam" href="https://store.steampowered.com/curator/37254837/" name="steam curator page"><img alt="steam logo" src={require('../../images/steam.png')} /></a></li>
        <li><a className="twitter" href="https://twitter.com/colludia" name="colludia twitter"><img alt="twitter logo" src={require('../../images/twitter.svg')} /></a></li>
        <li><a className="patreon" href="https://patreon.com/colludia" name="colludia patreon"><img alt="patreon logo" src={require('../../images/patreon.png')} /></a></li>
        <li><a className="discord" href="https://discord.gg/PG2qkZf" name="colludia discord server"><img alt="discord logo" src={require('../../images/discord.png')} /></a></li>
      </ul>
      <p className="copyright">Copyright &copy; 2020 Colludia. All Rights Reserved.</p>
    </div>
  </footer>
)

export default Footer
