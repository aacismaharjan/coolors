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

  getAllPossibleColors = (max) => {
    let colors = []
    for (let i = 0; i < max; i++) {
      colors.push(this.getRandomColorPalette())
    }
    return colors
  }

  render() {
    return <Colors colors={this.getAllPossibleColors(1500)} />
  }
}
