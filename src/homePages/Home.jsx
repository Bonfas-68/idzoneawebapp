import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import "./pages.scss"
import { AiOutlineClose } from 'react-icons/ai'
const Home = ({setToggleLogin}) => {
  
  return (
    <div className='b__home'>
      <div className="close__form">
        <AiOutlineClose 
        onClick={()=> setToggleLogin(false)}
        className='close__form-icon'/>
      </div>
      <Login setToggleLogin={setToggleLogin}/>
    </div>
  )
}

export default Home