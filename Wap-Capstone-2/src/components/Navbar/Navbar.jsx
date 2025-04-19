import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav_logo">
        <h1>Auction</h1>
      </div>
      <div className="nav_links">
        <a href="#">Home</a>
        <a href="#">Aucton</a>
        <a href="#">About</a>
        <a href="#">Contact us</a>
      </div>
      <div className="nav_action">
        <button className='nav_btn'>login/register</button>
      </div>
    </div>
  )
}

export default Navbar