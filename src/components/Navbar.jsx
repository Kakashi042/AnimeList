import React from 'react'
import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>AnimeList</h1>
      </Link>
      <Link to='/info'>
        <p>Info</p>
      </Link>
    </nav>
  )
}

export default Navbar