import React, { Component } from 'react'
import Colors from './Colors'

export default class Random extends Component {
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
    rgbColors: [],
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

  getRgbValues() {
    let colors = this.state.colors
    return colors.map((color) => {
      let r = color.slice(1, 3)
      let g = color.slice(3, 5)
      let b = color.slice(5, 7)

      return `rgb(${parseInt(r, 16)},${parseInt(g, 16)}, ${parseInt(b, 16)})`
    })
  }

  componentDidMount() {
    this.setState({ colors: this.getRandomColors(100) })
  }

  render() {
    if (this.state.colors.length) return <Colors colors={this.getRgbValues()} />
    return <Colors colors={this.state.colors} />
  }
}
