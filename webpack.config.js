'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        //new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    // eslint: {
    //     configFile: '.eslintrc',
    //     failOnWarning: false,
    //     failOnError: false
    // },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'eslint'
        //     }
        // ],
        loaders: [
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    emitWarning: true,
                    emitError: false,
                    //failOnWarning: false,
                    //failOnError: true,
                    useEslintrc: false,
                    configFile: path.join(__dirname, ".eslintrc")
                }
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.(less|css)$/,
                loader: 'style!css!less'
            }
        ]
    }
};
