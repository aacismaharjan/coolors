import React from 'react'

export default function Model({ value }) {
  const msgs = [
    'Copied!',
    'Right One!',
    "It'll Rock!",
    'Will Do!',
    'Paste Me!',
    'Got It!',
  ]

  return (
    <section id='color-copy-toast' style={{ backgroundColor: value }}>
      <h3>{msgs[Math.floor(Math.random() * msgs.length)]}</h3>
      <h5>{value}</h5>
    </section>
  )
}
