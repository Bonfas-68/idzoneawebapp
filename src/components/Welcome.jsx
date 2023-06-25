import React from 'react'
import {Link} from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Welcome = ({user, toggleProfile, setToggleProfile}) => {
  return (
    <div className="welcome">
        <button onClick={() =>setToggleProfile(!toggleProfile)}>
          <FaUser className="welcome__icon" />
          <span className="welcome__button">Profile</span>
        </button>
        <h2 className="welcome__name">Welcome!  {user?.username}✨</h2>
        <span className="welcome__email">{user?.user_email}</span>
        <p className="welcome__text">Your friends would love to hear your way of doing things.</p>
      </div>
  )
}

export default Welcome