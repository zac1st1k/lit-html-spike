var path = require('path');
var webpack = require('webpack');

module.exports = {
  // entry: './js/skate.js',
  // entry: './js/lit-html.js',
  entry: './js/skate-lit-html.js',
  // entry: './js/skate-preact.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
