import React, { Component } from 'react'
const DataContext = React.createContext()

class DataProvider extends Component {
  state = {
    system: '#HEXCODE',
    max: 20,
    audio: true,
    copied: '#ABCD21',
  }

  handleCopied = (value) => {
    this.setState({ copied: value })
  }

  handleSystemChange = (e) => {
    this.setState({ system: e.target.value })
  }

  convertHexToRgb = (hex) => {
    let r = hex.slice(1, 3),
      g = hex.slice(3, 5),
      b = hex.slice(5, 7)
    const toRgb = (val) => parseInt(val, 16)

    return `rgb(${toRgb(r)}, ${toRgb(g)}, ${toRgb(b)})`
  }

  convertRgbtoHex = (rgb) => {
    const color = rgb.match(/\d+/g)
    let r = color[0],
      g = color[1],
      b = color[2]
    const toHex = (value) => {
      let val = parseInt(value)
      let hex = val.toString(16)
      return val < 16 ? '0' + hex : hex
    }

    return '#' + toHex(r) + toHex(g) + toHex(b)
  }

  handleMaxChange = (e) => {
    this.setState({ max: parseInt(e.target.value) })
  }

  handleAudioChange = (e) => {
    this.setState({ audio: e.target.checked })
  }

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          handleSystemChange: this.handleSystemChange,
          handleMaxChange: this.handleMaxChange,
          handleAudioChange: this.handleAudioChange,
          convertHexToRgb: this.convertHexToRgb,
          convertRgbtoHex: this.convertRgbtoHex,
          handleCopied: this.handleCopied,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export { DataContext, DataProvider }
