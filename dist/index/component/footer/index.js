'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FooterContainer = (0, _reactRedux.connect)(state => ({ fetchStatus: state.fetchStatus }), null)(_Footer2.default);

exports.default = FooterContainer;