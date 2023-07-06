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
        test: /\.(png|jpg|jpeg|gif|ico)$/i,
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
      template: './src/technology.hbs',
      filename: 'technology.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/register.hbs',
      filename: 'register.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/login.hbs',
      filename: 'login.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/forgotpassword.hbs',
      filename: 'forgotpassword.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/resetpassword.hbs',
      filename: 'resetpassword.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/getuser.hbs',
      filename: 'getuser.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/getusers.hbs',
      filename: 'getusers.html',
    }),
   
    new HtmlWebpackPlugin({
      template: './src/deleteuser.hbs',
      filename: 'deleteuser.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/logout.hbs',
      filename: 'logout.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/refreshusertoken.hbs',
      filename: 'refreshusertoken.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/createrecipe.hbs',
      filename: 'createrecipe.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/getrecipes.hbs',
      filename: 'getrecipes.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/updaterecipe.hbs',
      filename: 'updaterecipe.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/deleterecipe.hbs',
      filename: 'deleterecipe.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/deleterecipes.hbs',
      filename: 'deleterecipes.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/ratelimit.hbs',
      filename: 'ratelimit.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/isadmin.hbs',
      filename: 'isadmin.html',
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
