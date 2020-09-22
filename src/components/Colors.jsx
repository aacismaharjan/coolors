import React, { Component } from 'react'
import Color from './Color'

export default class Colors extends Component {
  state = {
    colors: [],
  }

  componentDidMount() {
    let i = 0
    let colorInterval = setInterval(() => {
      if (i >= this.props.colors.length - 1) clearInterval(colorInterval)
      this.setState({ colors: [...this.state.colors, this.props.colors[i++]] })
    }, 100)
  }

  render() {
    const colors = this.state.colors.map((color, i) => (
      <Color key={color} hex={color} />
    ))

    return (
      <div className='container-fluid py-3'>
        <div className='card-container'>{colors}</div>
      </div>
    )
  }
}
