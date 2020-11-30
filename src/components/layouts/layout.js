/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header/header"
import LayeredNav from "../header/layered-nav"
import Footer from "../footer/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [darkmode, setDarkmode] = useState(
    window.localStorage.getItem("darkmode") === "true" || false
  )

  return (
    <div id={darkmode ? "darkmode" : "lightmode"}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <LayeredNav darkmode={darkmode} setDarkmode={setDarkmode} />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
