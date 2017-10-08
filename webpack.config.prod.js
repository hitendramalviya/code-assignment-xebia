const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack  = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

const config = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill', // Required to transpile new es6 features to run cross browsers
    './app/index'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
    publicPath: ''
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { sourceMap: true, modules: false, importLoaders: 1, minimize: true }
          }]
        })
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
    }),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
