import indexController from '../controller/page'

export default function route (router) {
  router.get('/', indexController)
}
