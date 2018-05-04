import loadData from './loadData'

export default async function listHanlder (ctx) {
  try {
    const page = parseInt(ctx.params.page, 10) || 0
    const list = await loadData(page, 10)

    ctx.set('Content-Type', 'application/json; charset=utf-8')

    const data = {
      list,
      code: 1
    }

    ctx.body = JSON.stringify(data)

  } catch (err) {
    ctx.body = JSON.stringify({
      code: -1,
      message: err.message
    })
    // TOOD add log
  }
}
