const { resolve } = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const rimraf = require('rimraf');

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    main: './main.js'
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  devServer: {

    contentBase: resolve(__dirname, 'dist'),

    publicPath: '/',
    hot: true
  },

  module: {
    rules: [{
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ]
      },
      {
        test: /\.ejs$/,
        use: [
          'ejs-loader',
          'ejs-html-loader',
        ]
      },
      {
        test: /\.(png|jpg|svg|woff|woff2)$/,
        use: ['url-loader?name=[name].[ext]&limit=4096']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },

  plugins: [
    // {
    // //   apply: (compiler) => {
    // //     rimraf.sync(compiler.options.output.path)
    // //   }
    // // },

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),

    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'containers/index.ejs'
    })
  ]

};
