import Router from 'koa-router'
import indexRoute from './index/route'

const router = new Router()

indexRoute(router)

export default router
