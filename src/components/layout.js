import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

import Header from "components/header"
import Footer from "components/footer"
import useMetadata from "hooks/use-metadata"

const Layout = ({ children }) => {
  const data = useMetadata()

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main css={[tw`relative flex-1`]}>{children}</main>
      <Footer siteTitle={data.title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
