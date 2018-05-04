'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ListContainer = (0, _reactRedux.connect)(state => ({ list: state.list }))(_List2.default);
exports.default = ListContainer;