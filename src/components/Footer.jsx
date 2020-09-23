import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { DataContext } from '../Context'

export default function Footer() {
  const context = useContext(DataContext)
  const { handleSystemChange, handleMaxChange } = context

  return (
    <footer className='bg-secondary'>
      <div className='container-fluid py-2'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md-6 col-sm-9'>
            <Form className='d-flex'>
              <Form.Group
                controlId='exampleForm.ControlSelect1'
                className='d-flex m-0 mr-3 align-items-center'
              >
                <Form.Label className='m-0 mr-2 text-white'>
                  System:{' '}
                </Form.Label>
                <Form.Control
                  as='select'
                  size='sm'
                  name='system'
                  onChange={(e) => handleSystemChange(e)}
                >
                  <option>#HEXCODE</option>
                  <option>RGB</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                controlId='exampleForm.ControlSelect1'
                className='d-flex m-0 align-items-center'
              >
                <Form.Label className='m-0 mr-2 text-white'>Max:</Form.Label>
                <Form.Control
                  as='select'
                  size='sm'
                  name='system'
                  onChange={(e) => handleMaxChange(e)}
                >
                  <option>20</option>
                  <option>100</option>
                  <option>500</option>
                  <option>2000</option>
                  <option>5000</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>

          <div className='col-md-3 col-sm-6'>
            <p className='text-white text-right mb-0 ml-auto'>
              Made with 🖤 by Aashish
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
