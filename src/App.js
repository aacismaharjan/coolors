import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navigation from './components/Navigation'
import Random from './components/Random'
import Popular from './components/Popular'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Random} />
          <Route exact path='/random' component={Random} />
          <Route exact path='/popular' component={Popular} />
        </Switch>
      </>
    )
  }
}

export default App
