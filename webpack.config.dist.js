const { resolve } = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const rimraf = require('rimraf');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    main: './main.js'
  },

  output: {
    path: resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js',
    publicPath: 'assets/'
  },

  module: {
    rules: [{
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          publicPath: '',
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader?sourceMap',
            'resolve-url-loader',
            'sass-loader?sourceMap',
          ]
        })
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.ejs$/,
        use: [
          'ejs-loader?root=.!./containers/index.ejs',
          'ejs-html-loader?root=.!./containers/index.ejs'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif|woff|woff2)$/,
        use: [
          'url-loader?name=[name].[ext]&limit=4096'
        ]
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

    // new webpack.LoaderOptionsPlugin(),

    new webpack.ProvidePlugin({
      _: 'lodash'
    }),

    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),

    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      }
    }),

    new htmlWebpackPlugin({
      inject: true,
      filename: '../index.html',
      template: 'containers/index.ejs',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
        removeComments: true
      }
    }),

    new UglifyJSPlugin({
      output: {
        comments: false
      }
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.NoEmitOnErrorsPlugin()
  ]

};
