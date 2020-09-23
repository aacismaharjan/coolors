import React, { Component } from 'react'
import Color from './Color'

export default class Colors extends Component {
  state = {
    colors: [],
  }

  componentDidMount() {
    this.handleAnimation()
  }

  handleAnimation() {
    let i = 0
    let colorInterval = setInterval(() => {
      if (i >= this.props.colors.length - 1) clearInterval(colorInterval)
      this.setState({ colors: [...this.state.colors, this.props.colors[i++]] })
    }, 50)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.colors !== this.props.colors) {
      this.setState({ colors: this.props.colors })
    }
  }

  render() {
    const colors = this.state.colors.map((color, i) => (
      <Color key={i} hex={color} />
    ))

    return (
      <div className='container-fluid py-3'>
        <div className='card-container'>{colors}</div>
      </div>
    )
  }
}
