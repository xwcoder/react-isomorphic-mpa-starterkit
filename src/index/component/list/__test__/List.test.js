import React from 'react'
import { shallow } from 'enzyme'
import List from '../List'
import Item from '../../item'

const list = [
  {
    title: '还在说“别人家”的包子吗？蒸包子的8个技巧，轻松成为“别人家”的包子！',
    url: 'http://kuaibao.qq.com/s/20180202C0H7YJ00',
    pubTime: 1522816928000,
    docId: 20,
    summary: '还在说“别人家”的包子吗？蒸包子的8个技巧，轻松成为“别人家”的包子！还在说“别人家”的包子吗？蒸包子的8个技巧，轻松成为“别人家”的包子！'
  },
  {
    title: '还在说“别人家”的包子吗？蒸包子的8个技巧，轻松成为“别人家”的包子！',
    url: 'http://kuaibao.qq.com/s/20180202A0A93800',
    pubTime: 1522809128000,
    docId: 7,
    summary: '还在说“别人家”的包子吗？蒸包子的8个技巧，轻松成为“别人家”的包子！还在说“别人家”的包子吗？蒸包子的8个技巧，轻松成为“别人家”的包子！'
  },
  {
    title: '这个国家美女成灾愁嫁人 你想去吗？',
    url: 'http://kuaibao.qq.com/s/20180202A0A93800',
    pubTime: 1522807988000,
    docId: 22,
    summary: '这个国家美女成灾愁嫁人 你想去吗？这个国家美女成灾愁嫁人 你想去吗？'
  }
]


describe('index/component/List', () => {

  it('list with three data', () => {
    const wrapper = shallow(<List list={list} />)
    expect(wrapper.find(Item)).toHaveLength(3)
    expect(wrapper.find(Item).at(1).key()).toEqual(`${list[1].docId}`)
    expect(wrapper).toMatchSnapshot()
  })
})
