const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// list of vendor libraries from package.json, usually would only include
// libraries here that would NOT update often because you want them to cache
const VENDOR_LIBS = [
  'faker', 'lodash', 'react', 'react-dom', 'react-input-range',
  'react-redux', 'react-router', 'redux', 'redux-form', 'redux-thunk',
];

module.exports = {
  entry: {
    bundle: './src/index.js', // bundle filename starting inside of index.js
    vendor: VENDOR_LIBS, // produce a separate bundle file named bundle.js
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // save the output with the key from the `entry` key,
    // and the chunkhash for a unique key when it updates for cache reasons
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/, // do not apply babel to node_modules
      },
      {
        use: ['style-loader', 'css-loader'], // reads from right to left
        test: /\.css$/,
      },
    ],
  },
  plugins: [
    // if any modules are the same as the ones in the 'vendor' entry point
    // pull them out and keep them just in the vendor file
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'], // create a minifest.js file to tell the browser if the vendor file actually got changed
    }),
    // this plugin will take all of the js files created by webpack, create a new
    // html document based on the template one we pass it and insert a script tag
    // for each js file created by webpack
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    // define environment variables for build
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
