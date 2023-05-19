const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [ new CleanWebpackPlugin()]
});
