import React, { Component } from 'react'
import Color from './Color'

export default class Colors extends Component {
  render() {
    const colors = this.props.colors.map((color, i) => (
      <Color key={i} hex={color} />
    ))

    return (
      <div className='container-fluid py-3'>
        <div className='card-container'>{colors}</div>
      </div>
    )
  }
}
