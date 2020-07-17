const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    'web-components': path.join(__dirname, 'src/web-components/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist/web-components'),
    filename: '[name].[hash].js',
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
  ],
}
