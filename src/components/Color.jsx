import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap'
import Model from './Modal'
import SelectedAudio from '../assets/select.mp3'
import { DataContext } from '../Context'
import { handleCopyToClipboard } from '../Utilities'

export default function Color({ hex }) {
  const context = useContext(DataContext)
  const {
    settings: { audio },
    handleCopied,
  } = context
  const [isClick, setIsClick] = useState(false)
  const [msg, setMsg] = useState('')

  const msgs = [
    'Copied!',
    'Right One!',
    "It'll Rock!",
    'Will Do!',
    'Paste Me!',
    'Got It!',
  ]

  const colorValue = hex || '#000000'

  const handleSelectedAudio = () => {
    let selectedSound = new Audio(SelectedAudio)
    selectedSound.play()
  }

  const handleRandomMsg = () => {
    const index = Math.floor(Math.random() * msgs.length)
    setMsg(msgs[index])
  }

  const handleClick = (e) => {
    setIsClick(true) // Poping Model box
    audio && handleSelectedAudio() // Select Audio Effect
    handleRandomMsg() // Random Poping Msg
    handleCopyToClipboard(colorValue) // Copies to Clipboard
    handleCopied(colorValue) // Copies to State

    let intervalId = setTimeout(function () {
      clearTimeout(intervalId)
      setIsClick(false)
    }, 1000)
  }

  return (
    <Card className='card-color' onClick={() => handleClick()}>
      {isClick && <Model value={colorValue} msg={msg} />}
      <div className='color-img' style={{ backgroundColor: colorValue }}></div>
      <Card.Body className='color-name'>
        <Card.Title>{colorValue}</Card.Title>
      </Card.Body>
    </Card>
  )
}
