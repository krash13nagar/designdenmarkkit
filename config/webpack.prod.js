// webpack.prod.js

const path = require('path')
const paths = require('./paths')
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

var BUILD_DIR = paths.build;
var APP_DIR = path.resolve(__dirname, '../src');
//const TEMP_PATH = path.join(__dirname, "../public", "index.html");


module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "main.js",
    path: BUILD_DIR,
    library: 'DenUIComponent',
    libraryTarget: 'umd',
    publicPath: '/',
    clean: true
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    })
  ],
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ]
  },
  // pass all js files through Babel
  resolve: {
    alias: {
      Env_Path: APP_DIR + "/environments/environment.prod",
     'react': path.resolve(__dirname, '../node_modules/react'),
     'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),      
    },
    modules: [APP_DIR, 'node_modules'],
    // extensions: [ ".js", ".jsx"],
  },
  externals: {      
    // Don't bundle react or react-dom      
    react: {          
        commonjs: "react",          
        commonjs2: "react",          
        amd: "React",          
        root: "React"      
    },      
    "react-dom": {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
    }  
  },
  optimization: {
    minimize: true,
      minimizer: [
        new TerserWebpackPlugin({
            terserOptions: {
                compress: {
                    comparisons: false,
                },
                
                output: {
                    comments: false,
                    ascii_only: true,
                },
                warnings: false,
            },
        }),
      new CssMinimizerPlugin(),
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool:false
})