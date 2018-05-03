import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppContainer from '../component/app'
import reducer from '../reducer'
import assets from '../../../assets.json'

export default async function indexController (ctx) {

  const store = createStore(reducer)
  const html = renderToString(<Provider store={store}><AppContainer /></Provider>)

  await ctx.render('index/view/index', {
    preloadState: JSON.stringify(store.getState()),
    assets,
    html
  })
}
