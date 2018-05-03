'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reactHotLoader = require('react-hot-loader');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppContainer = (0, _reactRedux.connect)(null, null)(_App2.default);

exports.default = (0, _reactHotLoader.hot)(module)(AppContainer);