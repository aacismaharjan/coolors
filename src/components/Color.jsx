import React from 'react'
import { Card } from 'react-bootstrap'

export default function Color({ hex }) {
  const colorValue = hex || 'dodgerblue'
  return (
    <Card className='card-color'>
      <div className='color-img' style={{ backgroundColor: colorValue }}></div>
      <Card.Body className='color-name'>
        <Card.Title>{colorValue}</Card.Title>
      </Card.Body>
    </Card>
  )
}
