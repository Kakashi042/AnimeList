import React from 'react'
import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>AnimeList</h1>
      </Link>
        <p>Info</p>
    </nav>
  )
}

export default Navbar