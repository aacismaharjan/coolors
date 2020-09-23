import React, { Component } from 'react'
import Color from './Color'
import { Form, Col, Row } from 'react-bootstrap'
import { DataContext } from '../Context'

export default class Compliments extends Component {
  static contextType = DataContext
  state = {
    hex: this.context.copied,
    compliment: null,
  }

  convertToCompliment(hex) {
    let r = hex.slice(1, 3)
    let g = hex.slice(3, 5)
    let b = hex.slice(5, 7)

    const toCom = (value) => {
      let val = parseInt('FF', 16) - parseInt(value, 16)
      const hex = val.toString(16)
      return val < 16 ? '0' + hex : hex
    }
    const compliment = `#${toCom(r) + toCom(g) + toCom(b)}`
    return compliment
  }

  componentDidMount() {
    this.handleChange(this.state.hex)
  }

  handleChange = (value) => {
    if (value[0] === '#' && value.length === 7) {
      this.setState({ hex: value, compliment: this.convertToCompliment(value) })
    }
  }

  render() {
    return (
      <div className='container-fluid py-3'>
        <div className='row justify-content-center mb-3'>
          <div className='col-md-6'>
            <Form.Group as={Row}>
              <Form.Label column sm='2'>
                Hex Color:
              </Form.Label>
              <Col sm='10'>
                <Form.Control
                  type='text'
                  placeholder={this.state.hex}
                  onChange={(e) => this.handleChange(e.target.value)}
                />
              </Col>
            </Form.Group>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-md-3'>
            <Color hex={this.state.hex} />
            <h5 className='text-center my-2'>Original Color</h5>
          </div>

          <div className='col-md-3'>
            <Color hex={this.state.compliment} />
            <h5 className='text-center my-2'>Complimentary Color</h5>
          </div>
        </div>
      </div>
    )
  }
}
