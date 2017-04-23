var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file

module.exports.plugins.push(
  new ExtractTextPlugin('../css/main.css')
);
