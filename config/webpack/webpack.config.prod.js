const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.config.common.js');

const options = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'config/postcss/postcss.config.js'
                }
              }
            },
            { loader: 'sass-loader' }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].bundle.css', allChunks: true }),
    new UglifyJSPlugin()
  ]
};

module.exports = merge.smart(common, options);
