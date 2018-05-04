'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Item;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formatTime = require('../../../lib/formatTime');

var _formatTime2 = _interopRequireDefault(_formatTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Item({ data }) {
  const {
    url,
    pubTime,
    title
  } = data;

  return _react2.default.createElement(
    'li',
    { className: 'list-item' },
    _react2.default.createElement(
      'a',
      { href: url },
      title
    ),
    _react2.default.createElement(
      'span',
      { className: 'tag-time' },
      (0, _formatTime2.default)(pubTime, 'yyyy-MM-dd hh:mm:ss')
    )
  );
}