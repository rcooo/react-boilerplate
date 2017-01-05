var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin')

var srcDir = path.resolve(__dirname, './src');
var buildDir = path.resolve(__dirname, './build');

module.exports = {
    devtool: 'eval-source-map',

    context: srcDir,

    entry: {
        app: './index.js',
    },

    output: {
        path: buildDir,
        filename: '[name].bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
            }
        ]
    },

    resolve: {
        modules: [srcDir, "node_modules"],
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new DashboardPlugin({ port: 3001 }),
    ],
}
