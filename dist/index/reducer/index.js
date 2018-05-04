'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _action = require('../action');

// state = {
//   list: [], // 新闻列表
//   page: 1, // 页码
//   fetchStatus: 0 // 0:未加载, 1:加载中, 2:加载成功, 3:加载失败，4: no more data
// }

function list(state = [], action) {

  if (action.type === _action.ADD_LIST) {
    return [...state, ...action.list];
  }

  return state;
}

function page(state = 0, action) {
  if (action.type === _action.PAGE_INCREAMENT) {
    return state + 1;
  }

  return state;
}

function fetchStatus(state = 0, action) {
  if (action.type === _action.FETCH_STATUS) {
    return action.fetchStatus;
  }

  return state;
}

exports.default = (0, _redux.combineReducers)({
  list,
  page,
  fetchStatus
});