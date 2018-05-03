'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _action = require('../action');

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