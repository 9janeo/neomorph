var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      allChunks: true
    })
  ]
}
