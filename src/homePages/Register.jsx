import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    user_email: '',
    user_password: ''
  })
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  
  const navigate = useNavigate()

    const newUser = {
      username: nameRef.current.value,
      user_email: emailRef.current.value,
      user_password: passwordRef.current.value
    }
    setUser(newUser)

  // const handleChange = async (e) =>{
  //   setUser((user) => user={[e.target.name]:[e.target.value]})
    
  // }
  const handleSubmit =async (e) =>{
    e.preventDefault()
    console.log(user)
    navigate('/home')
  }
  return (
    <form>
      <div className="form_control">
        <label htmlFor="username">Enter Username</label>
        <input type="text" name="username" id="username" ref={nameRef}/>
      </div>

      <div className="form_control">
        <label htmlFor="user_email">Enter Email</label>
        <input type="text" name="user_email" id="user_email" ref={emailRef}/>
      </div>
      <div className="form_control">
        <label htmlFor="user_password">Enter Password</label>
        <input type="text" name="user_password" id="user_password" ref={passwordRef}/>
      </div>
      <input type="submit" value="Register" onClick={handleSubmit}/>
    </form>
  )
}

export default Register