const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js?[hash:8]",
    publicPath: "/"
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      online: true,
      server: { baseDir: ["dist"] }
    })
  ]
});
