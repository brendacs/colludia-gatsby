/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import Layout from "./src/components/layouts/layout"
import "./src/styles/reset.scss"
import "./src/styles/global.scss"
import "./src/styles/darkmode.scss"

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
