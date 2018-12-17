var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'dist'
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['react']
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=[name].[ext]&outputPath=images/&publicPath=http://localhost/portfolio/wp-content/themes/neomorph/dist/images',
          'image-webpack-loader'
        ]
      },
      { test: 
        /\.(woff2?|svg)$/, 
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
      },
      { 
        test: /\.(ttf|eot)$/, 
        loader: 'file-loader?name=fonts/[name].[ext]' 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: './src',
    // contentBase: path.join(__dirname, './src'),
    publicPath: 'localhost/portfolio',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
      allChunks: true
    })
  ]
}
