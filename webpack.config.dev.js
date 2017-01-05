var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcDir = path.resolve(__dirname, './src');
var buildDir = path.resolve(__dirname, './build');

module.exports = {
    devtool: 'eval-source-map',

    context: srcDir,

    entry: {
        app: [
            'webpack-hot-middleware/client',
            './index.js',
        ],
    },

    output: {
        path: buildDir,
        publicPath: '/',
        filename: '[name].bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/],
            }
        ]
    },

    resolve: {
        modules: [srcDir, "node_modules"],
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
        }),
        new DashboardPlugin({ port: 3001 }),
    ],
}
