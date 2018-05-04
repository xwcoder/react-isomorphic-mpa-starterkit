import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../Footer'

describe('index/comonent/Footer', () => {

  it('footer with fetchStatus 0', () => {
    const wrapper = shallow(<Footer fetchStatus={0} />)
    expect(wrapper.find('.app-footer')).toHaveLength(1)
    expect(wrapper.text()).toEqual('loading...')
    expect(wrapper).toMatchSnapshot()
  })

  it('footer with fetchStatus 1', () => {
    const wrapper = shallow(<Footer fetchStatus={1} />)
    expect(wrapper.find('.app-footer')).toHaveLength(1)
    expect(wrapper.text()).toEqual('loading...')
    expect(wrapper).toMatchSnapshot()
  })

  it('footer with fetchStatus 2', () => {
    const wrapper = shallow(<Footer fetchStatus={2} />)
    expect(wrapper.find('.app-footer')).toHaveLength(1)
    expect(wrapper.text()).toEqual('loading...')
    expect(wrapper).toMatchSnapshot()
  })

  it('footer with fetchStatus 3', () => {
    const wrapper = shallow(<Footer fetchStatus={3} />)
    expect(wrapper.find('.app-footer')).toHaveLength(1)
    expect(wrapper.text()).toEqual('加载失败，请刷新重试')
    expect(wrapper).toMatchSnapshot()
  })

  it('footer with fetchStatus 4', () => {
    const wrapper = shallow(<Footer fetchStatus={4} />)
    expect(wrapper.find('.app-footer')).toHaveLength(0)
    expect(wrapper.text()).toEqual('')
    expect(wrapper).toMatchSnapshot()
  })
})
