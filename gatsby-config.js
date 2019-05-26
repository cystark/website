const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          'gatsby-remark-grid-tables',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options:
        {
          name: 'data',
          path: `${__dirname}/src/data/`,
        },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options:
        {
          name: 'pages',
          path: `${__dirname}/src/pages/`,
        },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Oswald',
            subsets: ['latin'],
          },
          {
            family: 'Lato',
            variants: ['300'],
          },
          {
            family: 'Cabin Condensed',
            variants: ['regular'],
          },
        ],
      },
    },
  ],
};
