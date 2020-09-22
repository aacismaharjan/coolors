import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Link to='/' className='navbar-brand'>
        Coolors
      </Link>
      <Nav className='ml-auto'>
        <Link to='/random' className='nav-link'>
          Random
        </Link>
        <Link to='/popular' className='nav-link'>
          Popular
        </Link>
        <Link to='/' className='nav-link'>
          Professional
        </Link>
      </Nav>
    </Navbar>
  )
}
