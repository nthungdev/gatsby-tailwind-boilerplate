/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

import Header from "components/header"
import Footer from "components/footer"
import useMetadata from "hooks/use-metadata"

const Main = styled.main(({ fullWidth }) => [
  tw`container flex-1 py-4`,
  !fullWidth && tw`mx-auto`,
])

const Layout = ({ children, fullWidthBody = false }) => {
  const data = useMetadata()

  return (
    <div className="min-h-screen flex flex-col">
      <Header siteTitle={data.title} />
      <Main fullWidth={fullWidthBody}>{children}</Main>
      <Footer siteTitle={data.title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
