const config = require("./config/site")

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        display: "standalone",
        icon: config.favicon,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Oswald", "Lato", "Cabin Condensed"],
        },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 970,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          "gatsby-remark-grid-tables",
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}
