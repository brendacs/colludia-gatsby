import { Link } from "gatsby"
import React from "react"
import "./subscribe-btn.scss"

const SubscribeBtn = () => (
  <Link className="action" to="/subscribe" name="subscribe">
    <button name="subscribe" className="subscribe-button">
      <img alt="email envelope" src={require("../../images/email.svg")} />
      <p className="subscribe-text">Subscribe</p>
    </button>
  </Link>
)

export default SubscribeBtn
