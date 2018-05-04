import React from 'react'
import { shallow } from 'enzyme'
import Item from '../Item'

describe('index/component/Item', () => {

  it('item with data', () => {
    const data = {
      docId: 1,
      url: 'http://localhost:8000/page/1',
      title: 'item test title',
      pubTime: 1522816928000
    }

    const wrapper = shallow(<Item data={data} />)

    expect(wrapper.find('a')).toHaveLength(1)
    expect(wrapper.find('.tag-time')).toHaveLength(1)
    expect(wrapper.find('a').prop('href')).toEqual(data.url)
    expect(wrapper.find('a').text()).toEqual(data.title)
    expect(wrapper).toMatchSnapshot()
  })
})
