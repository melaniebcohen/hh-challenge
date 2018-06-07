'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  // resolve: {
  //   extensions: ['*', '.js', '.jsx']
  // },
  output: {
    path: `${__dirname}/dist`,
    // publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    open: true,
    // contentBase: './dist'
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(svg)$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(woff|woff2|ttf|eot).*/,
        exclude: /\.svg/,
        loader: 'url-loader',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
};
