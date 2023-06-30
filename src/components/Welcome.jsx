import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/userContext';
import { domain } from '../utils/Utils';

const Welcome = ({setToggleShow}) => {
  const { user } = useContext(Context);
  
  return (
    <div className="welcome ">
        
        <Link className="welcome__url" to="profile">
          <img  className="welcome__icon"  src={`${domain}/uploads/${user?.user_image}`} />
          <span className="welcome__button">View Profile</span></Link>
      
        <h2 className="welcome__name">Welcome!  {user?.username}✨</h2>
        <span className="welcome__email">{user?.user_email}</span>
        <p className="welcome__text">Your friends would love to hear your way of doing things.</p>
      </div>
  )
}

export default Welcome