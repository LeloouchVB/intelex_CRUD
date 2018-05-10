const commonPaths = require('./common-path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {},
    output: {
        path: commonPaths.outputPath,
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: commonPaths.appEntry + '/views/index.html',
            filename: 'index.ejs',
            excludeChunks: [
                'bundle.js'
            ]
        }),
    ]
};

module.exports = config;