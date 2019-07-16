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
