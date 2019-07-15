const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@src": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@context": path.resolve(__dirname, "src/context"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@type": path.resolve(__dirname, "src/type"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@state": path.resolve(__dirname, "src/state"),
        "@animations": path.resolve(__dirname, "src/animations"),
      },
    },
  })
}

// const path = require("path")

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions
//
//   const pageTemplate = path.resolve("src/templates/page.tsx")
//
//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }
//
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: pageTemplate,
//         context: {}, // additional data can be passed via context
//       })
//     })
//   })
// }
