const commonPaths = require('./common-path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpack = require('webpack');

const config = {
    entry: {
        app: [
            `${commonPaths.appEntry}/index.js`,
        ]
    },
    mode: 'development',
    output: {
        path: commonPaths.outputPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
        ]
    },
    plugins: [
    ],
};

module.exports = config;