import { graphql, useStaticQuery } from "gatsby"

const useMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useMetadata
