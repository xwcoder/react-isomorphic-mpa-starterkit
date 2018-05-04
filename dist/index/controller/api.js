'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadData = require('./loadData');

var _loadData2 = _interopRequireDefault(_loadData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function listHanlder(ctx) {
  try {
    const page = parseInt(ctx.params.page, 10) || 0;
    const list = await (0, _loadData2.default)(page, 10);

    ctx.set('Content-Type', 'application/json; charset=utf-8');

    const data = {
      list,
      code: 1
    };

    ctx.body = JSON.stringify(data);
  } catch (err) {
    ctx.body = JSON.stringify({
      code: -1,
      message: err.message
    });
    // TOOD add log
  }
};