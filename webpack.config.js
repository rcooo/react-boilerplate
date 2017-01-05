var path = require('path');
var webpack = require('webpack');

var isProd = (process.env.NODE_ENV === 'production');

var srcDir = path.resolve(__dirname, './src');
var buildDir = path.resolve(__dirname, './build');

module.exports = {
    devtool: false,

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

    plugins: isProd ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // eslint-disable-line camelcase
                warnings: false, // Because uglify reports irrelevant warnings.
            },
        }),
    ] : [

    ],
}
