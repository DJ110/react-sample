/**
 * Created by dj110 on 6/10/17.
 */
var webpack = require('webpack');
var helpers = require('./helpers');
var path = require('path');

/* plugin */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '../src/index.jsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: '/dist',
        port: 8080,
        inline: true,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {}
                    }]
            },{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },{
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },{
                test: /\.(csv|tsv)$/,
                use: 'csv-loader'
            },{
                test: /\.xml$/,
                use: 'xml-loader',
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({template: path.join(__dirname, '../index.html')})
    ]
};