import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('index/component/Header', () => {

  it('header with title', () => {
    const wrapper = shallow(<Header title="今日要闻" />)
    expect(wrapper.find('h1')).toHaveLength(1)
    expect(wrapper.hasClass('app-header')).toBeTruthy()
    expect(wrapper.text()).toEqual('今日要闻')
    expect(wrapper).toMatchSnapshot()
  })

  it('header with empty title', () => {

    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1')).toHaveLength(1)
    expect(wrapper.hasClass('app-header')).toBeTruthy()
    expect(wrapper.text()).toEqual('')
    expect(wrapper).toMatchSnapshot()
  })
})
