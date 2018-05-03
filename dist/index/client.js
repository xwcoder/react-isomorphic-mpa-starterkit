'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

require('./style/index.scss');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _app = require('./component/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = (0, _redux.createStore)(_reducer2.default, __INIT_STATE__, (0, _redux.applyMiddleware)(_reduxThunk2.default));
window.store = store;

_reactDom2.default.hydrate(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_app2.default, null)
), document.getElementById('root'));