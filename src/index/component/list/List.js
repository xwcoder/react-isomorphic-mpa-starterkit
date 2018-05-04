import React from 'react'
import Item from '../item'

export default function List ({ list }) {

  const items = list.map(data => <Item key={data.docId} data={data} />)

  return (
    <ul className="list">{items}</ul>
  )
}
