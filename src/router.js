import Router from 'koa-router'
import indexRoute from './index/router'

const router = new Router()

indexRoute(router)

export default router
