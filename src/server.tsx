import * as Koa from 'koa'
import * as React from 'react'
import {renderToString} from 'react-dom/server'
import * as render from 'koa-ejs'
import * as path from 'path'
import * as Router from 'koa-router'
import App from './component/App'

const app = new Koa()

render(app, {
  root: path.join(__dirname, '../src/server/view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
})

const router = new Router()

router.get('/', async (ctx, next) => {

  let html = renderToString(
    <App title='开心' />
  )

  await ctx.render('index', {
    html,
    layout: false
  })

  await next()
})

router.get('/api/24h/:page', async (ctx, next) => {
  await next()
  console.log(ctx.params)
})

app.use(router.routes())

app.listen(8000)
