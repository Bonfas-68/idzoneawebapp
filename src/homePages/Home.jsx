import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./pages.scss"
import { AiOutlineClose } from 'react-icons/ai'
const Home = ({setToggleLogin}) => {
  const navigate = useNavigate()
  const handleSubmit =async (e) =>{
    e.preventDefault()

    navigate('/app')
  }
  return (
    <div className='b__home'>
      <div className="close__form">
        <AiOutlineClose 
        onClick={()=> setToggleLogin(false)}
        className='close__form-icon'/>
      </div>
      <form className='b__home-form'>
      <div className="b__home-form--control">
        <label htmlFor="username">Enter Username</label>
        <input type="text" name="username" id="username" autoComplete='no'/>
      </div>
      <div className="b__home-form--control">
        <label htmlFor="user_password">Enter Password</label>
        <input type="password" name="user_password" id="user_password" autoComplete='no'/>
      </div>
      <input className='form__btn' type="submit" value="Login" onClick={handleSubmit}/>
    </form>
    
    </div>
  )
}

export default Home