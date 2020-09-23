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
    const { convertHexToRgb } = this.context
    return colors.map((color) => convertHexToRgb(color))
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
    const { system = '#HEXCODE' } = this.context

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
