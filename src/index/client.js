import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './style/index.scss'

import reducer from './reducer'
import AppContainer from './component/app'

const store = createStore(reducer, __INIT_STATE__, applyMiddleware(thunk))
window.store = store

ReactDOM.hydrate(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
