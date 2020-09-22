import React, { Component } from 'react'
import Color from './Color'

export default class Colors extends Component {
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
    return colors.map((color, index) => <Color key={index} hex={color} />)
  }

  render() {
    const colors = this.getAllPossibleColors(1000)
    return (
      <div className='container py-3'>
        <div className='card-container'>{colors}</div>
      </div>
    )
  }
}
