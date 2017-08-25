const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');

const PRODUCTION = process.argv.indexOf('-p') !== -1;

module.exports = {

  context: __dirname,

  devtool: !PRODUCTION && 'inline-source-map',

  entry: [
    './src/app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, '../static'),  // Path to put build
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        loaders: [ 'happypack/loader' ],
        query: { presets: ['es2015', 'stage-1', 'react'] }
      }, {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ]
  },

  postcss: [autoprefixer],

  sassLoader: {
    data: '@import "src/styles/main.scss";',
    includePaths: [path.resolve(__dirname, './src/')]
  },

  plugins: [
    new ExtractTextPlugin('css/bundle.css', { allChunks: true }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js',
      minChunks: Infinity
    }),

    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),

    new HappyPack({
        loaders: [ 'babel?presets[]=es2015' ],
    }),

    /**
     * Public chunks
     */
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
