'use strict'

const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: __dirname + '/app/static/js/index',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: 'js/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]


};
module.exports = config;