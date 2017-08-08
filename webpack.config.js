'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname)
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin

module.exports = {
    devtool: 'cheap-module-source-map',
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
        }),
        // new webpack.DllReferencePlugin({
        //     manifest: require(path.resolve(ROOT_PATH, 'manifest.json')),
        //     context: ROOT_PATH,
        // }),
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
                loader: 'json-loader'
            },
            // {
            //     test: /\.(less|css)$/,
            //     loader: 'style-loader!css-loader!less-loader'
            // },
            {
                test: /\.(less|css)$/,
                exclude: [
                    path.resolve(__dirname, 'app/styles'),
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!less-loader?sourceMap=true'
            }, {
                test: /\.(less|css)$/,
                include: [
                    path.resolve(__dirname, 'app/styles'),
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'style-loader!css-loader!less-loader?sourceMap=true'
            }
        ]
    }
};
