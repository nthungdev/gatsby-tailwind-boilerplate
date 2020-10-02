import React from "react"

export default ({ siteTitle }) => {
  return (
    <header className="p-4 bg-gray-300">
      <div className="container mx-auto">{`${siteTitle} - Header`}</div>
    </header>
  )
}
