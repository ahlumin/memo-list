const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "main"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    }
  },
  resolve: {
    modules: [path.resolve("node_modules"), path.resolve("src")],
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[hash:8]_[local]"
            }
          },
          "postcss-loader",
          "sass-loader"
        ],
        include: path.resolve("src")
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[hash:8]_[local]"
            }
          },
          "postcss-loader"
        ],
        include: path.resolve("src")
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
        include: path.resolve("src")
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/assets"),
        to: path.resolve(__dirname, "dist/assets")
      }
    ]),
    new CleanWebpackPlugin(["dist"], {
      root: __dirname,
      verbose: true
    })
  ]
};

module.exports = config;
