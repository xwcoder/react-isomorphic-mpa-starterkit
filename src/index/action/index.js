import axios from 'axios'

export const ADD_LIST = 'ADD_LIST'
export const PAGE_INCREAMENT = 'PAGE_INCREAMENT'
export const FETCH_STATUS = 'FETCH_STATUS'

export function addList (list) {
  return {
    type: ADD_LIST,
    list
  }
}

export function increasePage () {
  return {
    type: PAGE_INCREAMENT
  }
}

export function fetching () {
  return {
    type: FETCH_STATUS,
    fetchStatus: 1
  }
}

export function fetchSuccess () {
  return {
    type: FETCH_STATUS,
    fetchStatus: 2
  }
}

export function fetchFail () {
  return {
    type: FETCH_STATUS,
    fetchStatus: 3
  }
}

export function fetchEmpty () {
  return {
    type: FETCH_STATUS,
    fetchStatus: 4
  }
}

export function fetchNextPage () {

  return async (dispatch, getState) => {

    const { fetchStatus, page } = getState()

    if (fetchStatus === 1 || fetchStatus === 3 || fetchStatus === 4) {
      return
    }

    dispatch(fetching())

    const nextPage = page + 1

    try {
      const response = await axios.get(`/api/list/${nextPage}`)

      const { data = {} } = response
      const { code = 0, list } = data

      if (code === 1) { // 加载成功
        if (list.length) {

          dispatch(increasePage())
          dispatch(fetchSuccess())
          dispatch(addList(list))

          if (list.length < 10) {
            dispatch(fetchEmpty())
          }

        } else {
          dispatch(fetchEmpty())
        }
      } else { // 加载失败
        dispatch(fetchFail({ code }))
      }
    } catch (err) {
      dispatch(fetchFail())
    }
  }
}
