const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = () => {
  return {
    mode: 'development',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js?[hash]'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new ExtractTextPlugin("styles.css"),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    module: {
      rules: [{
          test: /(\.css|\.less)$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            }, {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-import'),
                  require('autoprefixer')({
                    browsers: [
                      "> 1%",
                      "last 2 versions"
                    ]
                  })
                ]
              }
            }, {
              loader: "less-loader"
            }]
          })
        },
        {
          test: /\.ts$/,
          use: 'ts-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]?[hash]'
                }
              },
            }
          }]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  }
}