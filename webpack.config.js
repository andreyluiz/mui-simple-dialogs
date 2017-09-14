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
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'material-ui/Dialog': 'Dialog',
    'material-ui/styles/MuiThemeProvider': 'MuiThemeProvider',
    'material-ui/styles/getMuiTheme': 'getMuitTheme',
    'material-ui/FlatButton': 'FlatButton',
    'material-ui/RaisedButton': 'RaisedButton'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};