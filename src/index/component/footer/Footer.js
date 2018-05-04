import React from 'react'

//   fetchStatus: 0 // 0:未加载, 1:加载中, 2:加载成功, 3:加载失败，4: no more data
export default function Footer ({ fetchStatus }) {

  let footer = null

  if (fetchStatus === 1 || fetchStatus === 0 || fetchStatus === 2) {
    footer = <div className="app-footer">loading...</div>
  } else if (fetchStatus === 3) {
    footer = <div className="app-footer">加载失败，请刷新重试</div>
  }

  return footer
}
