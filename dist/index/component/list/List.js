'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('../item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List({ list }) {

  const items = list.map(data => _react2.default.createElement(_item2.default, { key: data.docId, data: data }));

  return _react2.default.createElement(
    'ul',
    { className: 'list' },
    items
  );
}