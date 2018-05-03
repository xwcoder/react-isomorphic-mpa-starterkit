const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {

  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/bundle/'
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    port: 9000,
    historyApiFallback: true,
    hot: true,
    inline: true,
    // host: '0.0.0.0',
    disableHostCheck: true,
    publicPath: '/bundle/',
    watchContentBase: false,
    open: true,
    openPage: '',
    proxy: {
      '**': {
        target: 'http://localhost:8000'
      }
    }
  }
})
