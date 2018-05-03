const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {

  output: {
    filename: '[name]_[chunkhash].js',
    chunkFilename: '[id]_[chunkhash].js',
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name]_[contenthash:8].css'),
    new UglifyJsPlugin({
      // sourceMap: true
      uglifyOptions: {
        mangle: {
          safari10: true
        }
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new AssetsPlugin({
      includeManifest: 'manifest',
      filename: 'assets.json',
      prettyPrint: true
    })
  ]
})
