/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import Layout from "./src/components/layouts/layout"
import "./src/styles/reset.scss"
import "./src/styles/global.scss"

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
