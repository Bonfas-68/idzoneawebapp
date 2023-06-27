import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { Context } from '../context/userContext';

const Welcome = ({toggleProfile, setToggleProfile}) => {
  const { user } = useContext(Context);
  return (
    <div className="welcome">
        <button onClick={() =>setToggleProfile(!toggleProfile)}>
          <FaUser className="welcome__icon" />
          {/* <img  className="welcome__icon"  src={user.user_image} alt="user profile image" /> */}
          <span className="welcome__button">Profile</span>
        </button>
        <h2 className="welcome__name">Welcome!  {user?.username}✨</h2>
        <span className="welcome__email">{user?.user_email}</span>
        <p className="welcome__text">Your friends would love to hear your way of doing things.</p>
      </div>
  )
}

export default Welcome