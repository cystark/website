module.exports = {
  siteMetadata: {
    title: 'Cam Yuji Stark',
    description: 'Web Developers from Melbourne Australia',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
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
        ],
      },
    },
  ],
};
