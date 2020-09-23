import React, { Component } from 'react'
const DataContext = React.createContext()

class DataProvider extends Component {
  state = {
    system: '#HEXCODE',
    max: 20,
    audio: true,
  }

  handleSystemChange = (e) => {
    this.setState({ system: e.target.value })
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
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export { DataContext, DataProvider }
