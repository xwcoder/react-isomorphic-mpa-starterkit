'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('../mock/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadData(page = 0, size = 10) {

  return new Promise(resolve => {

    setTimeout(() => {
      const data = _data2.default.slice(page * size, (page + 1) * size);
      resolve(data);
    }, 100);
  });
}

exports.default = loadData;