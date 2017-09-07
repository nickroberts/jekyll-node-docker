const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.config.common.js');

const options = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist/',
    inline: true,
    hot: true,
    watchContentBase: true,
    host: '0.0.0.0'
  },
  output: {
    publicPath: '/assets'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(common, options);
