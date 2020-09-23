import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Model from './Modal'
import SelectedAudio from '../assets/select.mp3'

export default function Color({ hex }) {
  const [isClick, setIsClick] = useState(false)
  const colorValue = hex || 'dodgerblue'

  const handleClick = (e) => {
    setIsClick(true)
    let selectedSound = new Audio(SelectedAudio)
    selectedSound.play()

    let textArea = document.createElement('textarea')
    textArea.value = colorValue
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)

    setTimeout(function () {
      setIsClick(false)
    }, 1000)
  }

  return (
    <Card className='card-color' onClick={() => handleClick()}>
      {isClick && <Model value={colorValue} />}
      <div className='color-img' style={{ backgroundColor: colorValue }}></div>
      <Card.Body className='color-name'>
        <Card.Title>{colorValue}</Card.Title>
      </Card.Body>
    </Card>
  )
}
