import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppContainer from '../component/app'
import reducer from '../reducer'
import {
  addList,
  increasePage,
  fetchEmpty
} from '../action'
import assets from '../../../assets.json'
import loadData from './loadData'

export default async function indexController (ctx) {

  const store = createStore(reducer)
  try {

    const list = await loadData(1, 10)

    store.dispatch(addList(list))
    store.dispatch(increasePage())

    if (list.length < 10) {
      store.dispatch(fetchEmpty())
    }

    const html = renderToString(<Provider store={store}><AppContainer /></Provider>)

    await ctx.render('index/view/index', {
      preloadState: JSON.stringify(store.getState()),
      assets,
      html
    })
  } catch (err) {
    await ctx.render('index/view/index', {
      preloadState: JSON.stringify(store.getState()),
      assets,
      html: ''
    })
    // TOOD add log
  }
}
