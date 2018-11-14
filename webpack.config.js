var webpack = require('webpack');
var path = require('path');

// testing
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
