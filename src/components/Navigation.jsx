import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#random'>Coolors</Navbar.Brand>
      <Nav className='ml-auto'>
        <Nav.Link href='#random'>Random</Nav.Link>
        <Nav.Link href='#popular'>Popular</Nav.Link>
        <Nav.Link href='#professional'>Professional</Nav.Link>
      </Nav>
    </Navbar>
  )
}
