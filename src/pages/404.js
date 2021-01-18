import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <div className="text-center">
        <p className="text-4xl">Oops!</p>
        <h1>404 - PAGE NOT FOUND</h1>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div>
    </Layout>
  )
}
