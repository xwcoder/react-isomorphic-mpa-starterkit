'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

var _list = require('../list');

var _list2 = _interopRequireDefault(_list);

var _footer = require('../footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {

  componentDidMount() {
    if (this.props.didMount) {
      this.props.didMount();
    }

    const docEl = document.documentElement;

    const isScrollEnd = () => {

      let isEnd = false;

      if (this.footer) {
        const el = _reactDom2.default.findDOMNode(this.footer);

        if (el) {
          const { top } = el.getBoundingClientRect();
          isEnd = top < Math.max(docEl.clientHeight, window.screen.height);
        }
      }

      return isEnd;
    };

    const checkAndTriggerScrollEnd = () => {
      if (isScrollEnd()) {
        this.props.onScrollEnd();
      }
    };

    window.addEventListener('scroll', checkAndTriggerScrollEnd, false);

    checkAndTriggerScrollEnd();
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_header2.default, { title: '\u4ECA\u65E5\u8981\u95FB' }),
      _react2.default.createElement(_list2.default, null),
      _react2.default.createElement(_footer2.default, { ref: footer => {
          this.footer = footer;
        } })
    );
  }
}
exports.default = App;