import React, { Component } from 'react'
import Colors from './Colors'
import { DataContext } from '../Context'

export default class Popular extends Component {
  static contextType = DataContext
  render() {
    return <Colors colors={this.context.htmlColors} />
  }
}
