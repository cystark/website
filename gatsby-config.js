module.exports = {
  siteMetadata: {
    title: 'Cam Yuji Stark',
    description: 'Web Developers from Melbourne Australia',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          }
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options:
        {
          name: 'homepage-data',
          path: `${__dirname}/src/homepage-data/`,
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
    // {resolve:'gatsby-plugin-react-helmet'},
    // {resolve:'gatsby-plugin-sitemap'},
    // {resolve:'gatsby-plugin-offline'},
  ],
};
