import React from 'react'
import Random from './Random'
import Popular from './Popular'
import { Route, Switch } from 'react-router-dom'
import Compliments from './Compliments'

export default function ColorsContainer() {
  return (
    <div className='colors-container my-2'>
      <Switch>
        <Route exact path='/' component={Random} />
        <Route exact path='/random' component={Random} />
        <Route exact path='/popular' component={Popular} />
        <Route exact path='/compliments' component={Compliments} />
      </Switch>
    </div>
  )
}
