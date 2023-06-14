import React, { useState } from 'react'

const RoomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='room-navbar'>
      <button className="navbar-menu" onClick={()=> setShowMenu(!showMenu)}>
        <img  src={showMenu ? "/src/room-homepage-master/images/icon-close.svg": "/src/room-homepage-master/images/icon-hamburger.svg"} className='menu' alt="menu image " />
      </button>
        <div className="room-logo">
        <img src="src/room-homepage-master/images/logo.svg" alt="room logo image" />
        </div>
        
        <nav className={showMenu ? "nav-menu" : null }>
          <div className="nav">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
            
        </nav>
    </div>
  )
}

export default RoomNavbar