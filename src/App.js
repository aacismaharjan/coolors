import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ColorsContainer from './components/ColorsContainer'

class App extends Component {
  render() {
    return (
      <div className='one-page'>
        <Navigation />
        <ColorsContainer />
        <Footer />
      </div>
    )
  }
}

export default App
