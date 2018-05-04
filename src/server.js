import Koa from 'koa'
import render from 'koa-ejs'
import zlib from 'zlib'
import compress from 'koa-compress'
import koaStatic from 'koa-static'
import path from 'path'

import router from './router'

const app = new Koa()

app.use(compress({
  threshold: 1024,
  flush: zlib.Z_SYNC_FLUSH
}))

app.use(koaStatic(path.join(__dirname, '../assets')))

render(app, {
  root: path.join(__dirname, '../src'),
  viewExt: 'ejs',
  layout: false,
  cache: process.env.NODE_ENV !== 'development'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8000)

process.on('uncaughtException', (err) => {
  console.error(`on[uncaughtException] ${err}`)
})

process.on('unhandledRejection', (reason, p) => {
  console.error(`on[unhandledRejection] ${p} ${reason}`)
})
