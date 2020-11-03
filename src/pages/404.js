import React from 'react'
import SEO from '../components/seo'
import './404.scss'

const NotFoundPage = () => (
  <div className="error">
    <SEO title='Page not found' />
    <h1 className="error-title">404</h1>
    <p>Uh oh, page not found! :(</p>
    <img alt="colludia logo" className="error-image" src={require('../images/gamepad-book-square.png')} />
    <a className="error-go-home" href="/">Go to Home</a>
  </div>
)

export default NotFoundPage
