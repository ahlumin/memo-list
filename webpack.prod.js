const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "index.html"),
      template: "index.html"
    })
  ]
});
