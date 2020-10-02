import React from "react"

export default ({ siteTitle, ...props }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="p-4 bg-gray-700 text-gray-100">
      <div className="container mx-auto">
        Footer
        <p className="text-center text-sm pt-4 px-4 mt-4 text-gray-200">
          {`Copyright © ${currentYear} ${siteTitle} `}
          <nobr>All Rights Reserved.</nobr>
        </p>
      </div>
    </footer>
  )
}
