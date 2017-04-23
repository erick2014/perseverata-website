var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file

// production env
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    }
  })
);

// compress the js file
module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      warnings: false
    }
  })
);

module.exports.module.loaders[2] = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract("css", "css-loader")
};

module.exports.module.loaders[3] = {
  test: /\.styl$/,
  loader: ExtractTextPlugin.extract("stylus", "css-loader!stylus-loader")
};

module.exports.plugins.push(
  new ExtractTextPlugin('../css/main.css')
);
