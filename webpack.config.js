const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};