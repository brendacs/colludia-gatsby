import { Link } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import './404.scss'

const NotFoundPage = () => (
  <>
    <SEO title='Page not found' />
    <div className="error">
      <h1 className="error-title">404</h1>
      <p>Uh oh, page not found! :(</p>
      <img alt="colludia logo" className="error-image" src={require('../images/gamepad-book-square.png')} />
      <Link className="error-go-home" to="/">Go to Home</Link>
    </div>
  </>
)

export default NotFoundPage
