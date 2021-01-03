import React from "react"
import SEO from "../components/seo"
import ErrorScreen from "../components/common-ui/error-screen"

const NotFoundPage = () => (
  <>
    <SEO
      title="Page not found"
      description="Page does not exist on Indie Story Games."
    />
    <ErrorScreen type="404" />
  </>
)

export default NotFoundPage
