import React, { Component } from 'react'
import Colors from './Colors'
import { DataContext } from '../Context'
import { getRandomColor } from '../Utilities'

export default class Random extends Component {
  static contextType = DataContext

  state = {
    colors: [],
    modifiedColors: [],
    max: 0,
    system: null,
  }

  getRandomColors = (max) => {
    let colors = []
    for (let i = 0; i < max; i++) {
      colors.push(getRandomColor())
    }
    return colors
  }

  getRgbValues(colors) {
    const { convertHexToRgb } = this.context
    return colors.map((color) => convertHexToRgb(color))
  }

  componentDidMount() {
    const { max, system } = this.context.settings
    let colors = this.getRandomColors(max)
    if (system === 'RGB') colors = this.getRgbValues(colors)
    this.setState({ colors, modifiedColors: colors, max, system })
  }

  componentDidUpdate() {
    const {
      settings: { max, system },
    } = this.context

    if (this.state.max !== max) {
      const colors = this.getRandomColors(max)
      this.setState({ colors, modifiedColors: colors, max })
    }

    if (system !== this.state.system) {
      if (system === 'RGB') {
        const colors = this.getRgbValues(this.state.colors)
        this.setState({ modifiedColors: colors, system })
      } else {
        this.setState({ modifiedColors: this.state.colors, system })
      }
    }
  }

  render() {
    return <Colors colors={this.state.modifiedColors} />
  }
}
