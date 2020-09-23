import React, { Component } from 'react'
import Colors from './Colors'
import { DataContext } from '../Context'

export default class Random extends Component {
  static contextType = DataContext

  state = {
    hexValues: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ],
    colors: [],
    modified: [],
    max: 0,
  }

  getRandomHexValues = (values) => {
    let index = Math.floor(Math.random() * values.length)
    return values[index]
  }

  getRandomColorPalette = () => {
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += this.getRandomHexValues(this.state.hexValues)
    }
    return color
  }

  getRandomColors = (max) => {
    let colors = []
    for (let i = 0; i < max; i++) {
      colors.push(this.getRandomColorPalette())
    }
    return colors
  }

  getRgbValues(colors) {
    let modified = colors.map((color) => {
      let r = color.slice(1, 3)
      let g = color.slice(3, 5)
      let b = color.slice(5, 7)

      return `rgb(${parseInt(r, 16)},${parseInt(g, 16)}, ${parseInt(b, 16)})`
    })

    return modified
  }

  componentDidMount() {
    const { max } = this.context
    this.setState({ max: max })
    const colors = this.getRandomColors(max)
    this.setState({
      colors,
      modified: colors,
    })
  }

  componentDidUpdate(prevProps) {
    const { max } = this.context
    if (this.state.max !== max) {
      this.setState({ max: max })
      const colors = this.getRandomColors(max)
      this.setState({
        colors,
        modified: colors,
      })
    }
  }

  render() {
    const { system } = this.context
    let colors = this.state.colors
    if (system === 'RGB') {
    }

    console.log(this.state)
    return (
      <Colors
        colors={
          system === 'RGB'
            ? this.getRgbValues(this.state.colors)
            : this.state.colors
        }
      />
    )
  }
}
