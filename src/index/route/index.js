import indexController from '../controller/page'
import listController from '../controller/api'

export default function route (router) {
  router.get('/', indexController)
  router.get('/api/list/:page', listController)
}
