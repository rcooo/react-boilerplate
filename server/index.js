var express = require('express');
var process = require('process');
var path = require('path');
var config = require('../webpack.config.dev');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var compiler = webpack(config);

const app = express();
const outputPath = path.resolve(process.cwd(), 'build');

app.use(require('webpack-dev-middleware')(compiler, {
    quiet: true,
    publicPath: config.output.publicPath,
    hot: true,
}));

app.use(require('webpack-hot-middleware')(compiler, {
    log: () => {}
}));

app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
app.listen(3000, () => {
    console.log(`Server started at http://localhost:3000`);
});
