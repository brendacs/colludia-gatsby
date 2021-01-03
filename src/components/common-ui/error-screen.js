import { Link } from "gatsby"
import React from "react"
import "./error-screen.scss"

const ErrorScreen = ({ type }) => (
  <div className="error">
    <img
      alt="indie story games logo"
      className="error-image"
      src={require("../../images/gamepad-book-square.webp")}
    />
    <h1 className="error-title">{type === "coming" ? "Coming Soon" : "404"}</h1>
    <p>
      {type == "coming"
        ? "There's nothing here yet. Check back later!"
        : "Uh oh, page not found. :("}
    </p>
    <Link className="error-go-home" to="/">
      Go to Home
    </Link>
  </div>
)

export default ErrorScreen
