
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const basePath = __dirname;

module.exports = {
    mode: 'production',
    entry: [path.join(basePath, "src/index.fork.js")],
    output: {
      filename: "app-[hash].js",
      chunkFilename: "[name]-[hash].bundle.js",
      publicPath: "/static/",
      path: path.join(basePath, "distWebpackFork/static")
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.webpack.fork.html",
        path: "distWebpackFork",
        filename: "../index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            configFile: path.join(basePath, "./babel.config.esm.js")
          }
        }
      ]
    },
    optimization: {},
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0",
      port: 5177,
      historyApiFallback: { index: "/static/../index.html" }
    }
  };