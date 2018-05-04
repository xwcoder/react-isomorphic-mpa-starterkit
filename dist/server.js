'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaEjs = require('koa-ejs');

var _koaEjs2 = _interopRequireDefault(_koaEjs);

var _zlib = require('zlib');

var _zlib2 = _interopRequireDefault(_zlib);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();

app.use((0, _koaCompress2.default)({
  threshold: 1024,
  flush: _zlib2.default.Z_SYNC_FLUSH
}));

app.use((0, _koaStatic2.default)(_path2.default.join(__dirname, '../assets')));

(0, _koaEjs2.default)(app, {
  root: _path2.default.join(__dirname, '../src'),
  viewExt: 'ejs',
  layout: false,
  cache: process.env.NODE_ENV !== 'development'
});

app.use(_router2.default.routes());
app.use(_router2.default.allowedMethods());

app.listen(8000);

process.on('uncaughtException', err => {
  console.error(`on[uncaughtException] ${err}`);
});

process.on('unhandledRejection', (reason, p) => {
  console.error(`on[unhandledRejection] ${p} ${reason}`);
});