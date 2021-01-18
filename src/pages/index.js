import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 text-white text-3xl flex items-center justify-center">
        <h1>Hello world!</h1>
      </div>
    </Layout>
  )
}
