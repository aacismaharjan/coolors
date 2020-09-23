import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap'
import Model from './Modal'
import SelectedAudio from '../assets/select.mp3'
import { DataContext } from '../Context'

const handleCopyToClipboard = (str) => {
  // Creating virtual textarea to select msg
  let textArea = document.createElement('textarea')
  textArea.value = str
  document.body.appendChild(textArea)

  // Selects the input and executes the 'COPY' command
  textArea.select()
  document.execCommand('copy')

  // Removing virtual textarea
  document.body.removeChild(textArea)
}

export default function Color({ hex }) {
  const context = useContext(DataContext)
  const { audio } = context
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

  const colorValue = hex || 'dodgerblue'

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
    console.log(audio)
    audio && handleSelectedAudio() // Select Audio Effect
    handleRandomMsg() // Random Poping Msg
    handleCopyToClipboard(colorValue) // Copies to Clipboard

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
