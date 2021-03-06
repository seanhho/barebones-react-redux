var webpack = require('webpack');
var path = require("path");

var lib_dir = __dirname + '/client/lib',
    node_dir = __dirname + '/node_modules';

var config = {

    entry: './client/src/index.js',

    output: {
        path: path.join(__dirname, "client/lib"),
        filename: "[name].bundle.js"
    },
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
};

module.exports = config;