'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _app = require('../component/app');

var _app2 = _interopRequireDefault(_app);

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _assets = require('../../../assets.json');

var _assets2 = _interopRequireDefault(_assets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function indexController(ctx) {

  const store = (0, _redux.createStore)(_reducer2.default);
  const html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_app2.default, null)
  ));

  await ctx.render('index/view/index', {
    preloadState: JSON.stringify(store.getState()),
    assets: _assets2.default,
    html
  });
};