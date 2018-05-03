import { combineReducers } from 'redux'
import {
  ADD_LIST,
  PAGE_INCREAMENT,
  FETCH_STATUS
} from '../action'

function list (state = [], action) {

  if (action.type === ADD_LIST) {
    return [...state, ...action.list]
  }

  return state
}

function page (state = 0, action) {
  if (action.type === PAGE_INCREAMENT) {
    return state + 1
  }

  return state
}

function fetchStatus (state = 0, action) {
  if (action.type === FETCH_STATUS) {
    return action.fetchStatus
  }

  return state
}

export default combineReducers({
  list,
  page,
  fetchStatus
})
