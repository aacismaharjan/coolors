import React, { Component } from 'react'
const DataContext = React.createContext()

class DataProvider extends Component {
  state = {
    system: '#HEXCODE',
    max: 20,
  }

  handleSystemChange = (e) => {
    this.setState({ system: e.target.value })
  }

  handleMaxChange = (e) => {
    this.setState({ max: parseInt(e.target.value) })
  }

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          handleSystemChange: this.handleSystemChange,
          handleMaxChange: this.handleMaxChange,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export { DataContext, DataProvider }
