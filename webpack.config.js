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
    react: 'react',
    'react-dom': 'react-dom',
    'material-ui/Dialog': 'material-ui/Dialog',
    'material-ui/styles/MuiThemeProvider': 'material-ui/styles/MuiThemeProvider',
    'material-ui/styles/getMuiTheme': 'material-ui/styles/getMuiTheme',
    'material-ui/FlatButton': 'material-ui/FlatButton',
    'material-ui/RaisedButton': 'material-ui/RaisedButton',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};