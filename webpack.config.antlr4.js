
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const basePath = __dirname;

module.exports = {
    mode: 'production',
    entry: [path.join(basePath, "src/index.antlr4.js")],
    output: {
      filename: "app-[hash].js",
      chunkFilename: "[name]-[hash].bundle.js",
      publicPath: "/static/",
      path: path.join(basePath, "distWebpackAntlr4/static")
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.webpack.antlr4.html",
        path: "distWebpackAntlr4",
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
      port: 5176,
      historyApiFallback: { index: "/static/../index.html" }
    }
  };