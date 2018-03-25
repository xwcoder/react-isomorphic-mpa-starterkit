//import React, {Component} from 'react'
//import './app.css'
import * as React from 'react'

interface AppProps {
  title?: string
}

class App extends React.Component <AppProps>{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default App
