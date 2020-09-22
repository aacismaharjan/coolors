import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navigation from './components/Navigation'
import Colors from './components/Colors'

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Colors />
      </>
    )
  }
}

export default App
