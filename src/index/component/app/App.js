import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '../header'
import ListContaienr from '../list'
import FooterContainer from '../footer'

export default class App extends Component {

  componentDidMount () {
    if (this.props.didMount) {
      this.props.didMount()
    }

    const docEl = document.documentElement

    const isScrollEnd = () => {

      let isEnd = false

      if (this.footer) {
        const el = ReactDOM.findDOMNode(this.footer)

        if (el) {
          const { top } = el.getBoundingClientRect()
          isEnd = top < Math.max(docEl.clientHeight, window.screen.height)
        }
      }

      return isEnd
    }

    const checkAndTriggerScrollEnd = () => {
      if (isScrollEnd()) {
        this.props.onScrollEnd()
      }
    }

    window.addEventListener('scroll', checkAndTriggerScrollEnd, false)

    checkAndTriggerScrollEnd()
  }

  render () {
    return (
      <div>
        <Header title="今日要闻" />
        <ListContaienr />
        <FooterContainer ref={(footer) => { this.footer = footer }} />
      </div>
    )
  }
}
