import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useMetadata from "hooks/use-metadata"

import DefaultImage from "static/placeholder.png"

const SEO = ({ description, lang, meta, title, image, path }) => {
  const site = useMetadata()

  const metaDescription = description || site.description
  const imageUrl = image || `${site.siteUrl}${DefaultImage}`
  const url = `${site.siteUrl}${path}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: imageUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default SEO
