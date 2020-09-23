import React from 'react'

export default function Model({ value, msg }) {
  return (
    <section id='color-copy-toast' style={{ backgroundColor: value }}>
      <h3>{msg}</h3>
      <h5>{value}</h5>
    </section>
  )
}
