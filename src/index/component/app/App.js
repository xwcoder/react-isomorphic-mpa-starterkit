import React, { Component } from 'react'

export default class App extends Component {

  componentDidMount () {
    if (this.props.didMount) {
      this.props.didMount()
    }
  }

  render () {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
