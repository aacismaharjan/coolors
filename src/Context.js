import React, { Component } from 'react'
const DataContext = React.createContext()

class DataProvider extends Component {
  state = {
    clipboard: '#ABCD21',
    settings: {
      system: '#HEXCODE',
      max: 20,
      audio: true,
    },
    htmlColors: [
      'AliceBlue',
      'AntiqueWhite',
      'Aqua',
      'Aquamarine',
      'Azure',
      'Beige',
      'Bisque',
      'Black',
      'BlanchedAlmond',
      'Blue',
      'BlueViolet',
      'Brown',
      'BurlyWood',
      'CadetBlue',
      'Chartreuse',
      'Chocolate',
      'Coral',
      'CornflowerBlue',
      'Cornsilk',
      'Crimson',
      'Cyan',
      'DarkBlue',
      'DarkCyan',
      'DarkGoldenRod',
      'DarkGray',
      'DarkGrey',
      'DarkGreen',
      'DarkKhaki',
      'DarkMagenta',
      'DarkOliveGreen',
      'DarkOrange',
      'DarkOrchid',
      'DarkRed',
      'DarkSalmon',
      'DarkSeaGreen',
      'DarkSlateBlue',
      'DarkSlateGray',
      'DarkSlateGrey',
      'DarkTurquoise',
      'DarkViolet',
      'DeepPink',
      'DeepSkyBlue',
      'DimGray',
      'DimGrey',
      'DodgerBlue',
      'FireBrick',
      'FloralWhite',
      'ForestGreen',
      'Fuchsia',
      'Gainsboro',
      'GhostWhite',
      'Gold',
      'GoldenRod',
      'Gray',
      'Grey',
      'Green',
      'GreenYellow',
      'HoneyDew',
      'HotPink',
      'IndianRed',
      'Indigo',
      'Ivory',
      'Khaki',
      'Lavender',
      'LavenderBlush',
      'LawnGreen',
      'LemonChiffon',
      'LightBlue',
      'LightCoral',
      'LightCyan',
      'LightGoldenRodYellow',
      'LightGray',
      'LightGrey',
      'LightGreen',
      'LightPink',
      'LightSalmon',
      'LightSeaGreen',
      'LightSkyBlue',
      'LightSlateGray',
      'LightSlateGrey',
      'LightSteelBlue',
      'LightYellow',
      'Lime',
      'LimeGreen',
      'Linen',
      'Magenta',
      'Maroon',
      'MediumAquaMarine',
      'MediumBlue',
      'MediumOrchid',
      'MediumPurple',
      'MediumSeaGreen',
      'MediumSlateBlue',
      'MediumSpringGreen',
      'MediumTurquoise',
      'MediumVioletRed',
      'MidnightBlue',
      'MintCream',
      'MistyRose',
      'Moccasin',
      'NavajoWhite',
      'Navy',
      'OldLace',
      'Olive',
      'OliveDrab',
      'Orange',
      'OrangeRed',
      'Orchid',
      'PaleGoldenRod',
      'PaleGreen',
      'PaleTurquoise',
      'PaleVioletRed',
      'PapayaWhip',
      'PeachPuff',
      'Peru',
      'Pink',
      'Plum',
      'PowderBlue',
      'Purple',
      'RebeccaPurple',
      'Red',
      'RosyBrown',
      'RoyalBlue',
      'SaddleBrown',
      'Salmon',
      'SandyBrown',
      'SeaGreen',
      'SeaShell',
      'Sienna',
      'Silver',
      'SkyBlue',
      'SlateBlue',
      'SlateGray',
      'SlateGrey',
      'Snow',
      'SpringGreen',
      'SteelBlue',
      'Tan',
      'Teal',
      'Thistle',
      'Tomato',
      'Turquoise',
      'Violet',
      'Wheat',
      'White',
      'WhiteSmoke',
      'Yellow',
      'YellowGreen',
    ],
  }

  handleCopied = (color) => {
    if (color[0] !== '#') color = this.convertRgbtoHex(color)

    this.setState({ clipboard: color })
  }

  handleSystemChange = (e) => {
    this.setState({
      settings: { ...this.state.settings, system: e.target.value },
    })
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
    this.setState({
      settings: { ...this.state.settings, max: parseInt(e.target.value) },
    })
  }

  handleAudioChange = (e) => {
    this.setState({
      settings: { ...this.state.settings, audio: e.target.checked },
    })
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
