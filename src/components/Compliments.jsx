import React, { Component } from 'react'
import Color from './Color'
import { Form, Col, Row } from 'react-bootstrap'
import { DataContext } from '../Context'
import { convertToCompliment } from '../Utilities'

export default class Compliments extends Component {
  static contextType = DataContext
  state = {
    hex: this.context.clipboard,
    compliment: null,
  }

  componentDidMount() {
    this.handleChange(this.state.hex)
  }

  handleChange = (value) => {
    if (value[0] === '#' && value.length === 7) {
      this.setState({ hex: value, compliment: convertToCompliment(value) })
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
              <Col sm='10' className='d-flex align-items-center'>
                <Form.Control
                  type='text'
                  placeholder={this.state.hex}
                  onChange={(e) => this.handleChange(e.target.value)}
                />
                <input
                  type='color'
                  id='favcolor'
                  name='favcolor'
                  className='ml-2'
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
