const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack  = require('webpack');

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill', // Required to transpile new es6 features to run cross browsers
    './app/index'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass'],

    // Add 'app' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
    modules: ['app', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /(\.js|jsx)$/,
        include: path.join(__dirname, 'app'),
        use: [
          {
            loader: 'react-hot-loader'
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [{ loader: 'url-loader', options: { limit: 1000 } }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

module.exports = config;
