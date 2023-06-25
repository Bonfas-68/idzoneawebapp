import React from 'react'

const Welcome = ({user}) => {
  return (
    <div className="welcome">
        <AiOutlineUser className="welcome__icon" />
        <h2 className="welcome__name">Welcome!  {user?.username}✨</h2>
        <span className="welcome__email">{user?.user_email}</span>
        <p className="welcome__text">Your friends would love to hear your way of doing things.</p>
      </div>
  )
}

export default Welcome