'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _reactHotLoader = require('react-hot-loader');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _action = require('../../action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppContainer = (0, _reactRedux.connect)(state => ({ page: state.page }), dispatch => ({
  fetchNextPage() {
    dispatch((0, _action.fetchNextPage)());
  },
  onScrollEnd() {
    dispatch((0, _action.fetchNextPage)());
  }
}), (stateProps, dispatchProps, ownProps) => _extends({}, ownProps, stateProps, dispatchProps, {
  didMount() {
    const { page } = stateProps;
    if (page === 0) {
      dispatchProps.fetchNextPage();
    }
  }
}))(_App2.default);

exports.default = (0, _reactHotLoader.hot)(module)(AppContainer);