/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Tailwind Boilerplate`,
    description: ``,
    author: ``,
    siteUrl: `http://localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Tailwind Boilerplate`,
        short_name: `Gatsby Tailwind Boilerplate`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/static/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
        queries: {
          xs: "(min-width: 320px)",
          sm: "(min-width: 640px)",
          md: "(min-width: 768px)",
          lg: "(min-width: 1024px)",
          xl: "(min-width: 1280px)",
        },
      },
    },
  ],
}
