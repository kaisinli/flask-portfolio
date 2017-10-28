'use strict'

const webpack = require('webpack');
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
            }
        ]
    }
};
module.exports = config;