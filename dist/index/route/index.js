'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = route;

var _page = require('../controller/page');

var _page2 = _interopRequireDefault(_page);

var _api = require('../controller/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function route(router) {
  router.get('/', _page2.default);
  router.get('/api/list/:page', _api2.default);
}