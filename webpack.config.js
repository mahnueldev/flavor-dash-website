const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/script.js',
    bootstrap: './src/js/bootstrap.js',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.html$/,
        use: ['html-loader'],
      },

      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash].[ext][query]',
        },
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/svg/[name].[hash].[ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/introduction.hbs',
      filename: 'introduction.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/borders.hbs',
      filename: 'borders.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/signup.hbs',
      filename: 'signup.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/reset-password.hbs',
      filename: 'reset-password.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/login.hbs',
      filename: 'login.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/home.hbs',
      filename: 'home.html',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: './src/data', to: './data' },
        { from: './src/css', to: './css' },
        { from: './src/assets', to: './assets' },
       
      ],
    }),
  ],
};
