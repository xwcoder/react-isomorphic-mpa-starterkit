'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {

  componentDidMount() {
    if (this.props.didMount) {
      this.props.didMount();
    }
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'hello world'
      )
    );
  }
}
exports.default = App;