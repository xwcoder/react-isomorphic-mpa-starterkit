import React from 'react'
import formatTime from '../../../lib/formatTime'

export default function Item ({ data }) {
  const {
    url,
    pubTime,
    title
  } = data

  return (
    <li className="list-item">
      <a href={url}>{title}</a>
      <span className="tag-time">{formatTime(pubTime, 'yyyy-MM-dd hh:mm:ss')}</span>
    </li>
  )
}
