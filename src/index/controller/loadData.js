import mockList from '../mock/data'

function loadData (page = 0, size = 10) {

  return new Promise((resolve) => {

    setTimeout(() => {
      const data = mockList.slice(page * size, (page + 1) * size)
      resolve(data)
    }, 100)
  })
}

export default loadData
