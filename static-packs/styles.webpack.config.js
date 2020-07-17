const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    styles: path.join(__dirname, 'src/styles/main.scss'),
  },
  output: {
    path: path.join(__dirname, 'dist/css'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [{
      test: /\.(scss|sass)$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css.[hash].css',
    }),
  ],
}

