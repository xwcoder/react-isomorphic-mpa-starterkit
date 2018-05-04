"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//   fetchStatus: 0 // 0:未加载, 1:加载中, 2:加载成功, 3:加载失败，4: no more data
function Footer({ fetchStatus }) {

  let footer = null;

  if (fetchStatus === 1 || fetchStatus === 0 || fetchStatus === 2) {
    footer = _react2.default.createElement(
      "div",
      { className: "app-footer" },
      "loading..."
    );
  } else if (fetchStatus === 3) {
    footer = _react2.default.createElement(
      "div",
      { className: "app-footer" },
      "\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5"
    );
  }

  return footer;
}