import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation'
import Random from './components/Random'
import Popular from './components/Popular'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className='one-page'>
        <Navigation />
        <div className='colors-container my-2'>
          <Switch>
            <Route exact path='/' component={Random} />
            <Route exact path='/random' component={Random} />
            <Route exact path='/popular' component={Popular} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
