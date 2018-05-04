'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH_STATUS = exports.PAGE_INCREAMENT = exports.ADD_LIST = undefined;
exports.addList = addList;
exports.increasePage = increasePage;
exports.fetching = fetching;
exports.fetchSuccess = fetchSuccess;
exports.fetchFail = fetchFail;
exports.fetchEmpty = fetchEmpty;
exports.fetchNextPage = fetchNextPage;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ADD_LIST = exports.ADD_LIST = 'ADD_LIST';
const PAGE_INCREAMENT = exports.PAGE_INCREAMENT = 'PAGE_INCREAMENT';
const FETCH_STATUS = exports.FETCH_STATUS = 'FETCH_STATUS';

function addList(list) {
  return {
    type: ADD_LIST,
    list
  };
}

function increasePage() {
  return {
    type: PAGE_INCREAMENT
  };
}

function fetching() {
  return {
    type: FETCH_STATUS,
    fetchStatus: 1
  };
}

function fetchSuccess() {
  return {
    type: FETCH_STATUS,
    fetchStatus: 2
  };
}

function fetchFail() {
  return {
    type: FETCH_STATUS,
    fetchStatus: 3
  };
}

function fetchEmpty() {
  return {
    type: FETCH_STATUS,
    fetchStatus: 4
  };
}

function fetchNextPage() {

  return async (dispatch, getState) => {

    const { fetchStatus, page } = getState();

    if (fetchStatus === 1 || fetchStatus === 3 || fetchStatus === 4) {
      return;
    }

    dispatch(fetching());

    const nextPage = page + 1;

    try {
      const response = await _axios2.default.get(`/api/list/${nextPage}`);

      const { data = {} } = response;
      const { code = 0, list } = data;

      if (code === 1) {
        // 加载成功
        if (list.length) {

          dispatch(increasePage());
          dispatch(fetchSuccess());
          dispatch(addList(list));

          if (list.length < 10) {
            dispatch(fetchEmpty());
          }
        } else {
          dispatch(fetchEmpty());
        }
      } else {
        // 加载失败
        dispatch(fetchFail({ code }));
      }
    } catch (err) {
      dispatch(fetchFail());
    }
  };
}