var express = require('express');
var config = require('../webpack.config.dev');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var compiler = webpack(config);

const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  quiet: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: () => {}
}));
