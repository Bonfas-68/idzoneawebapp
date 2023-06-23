import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const Login = ({setToggleLogin}) => {

    const navigate = useNavigate()
    const {handleSubmit, register, formState:{errors}} = useForm()
    const onSubmit =async(data) =>{
      const res = await axios.post("http://localhost:5000/auth/login", data)
      const message = await res?.data?.message
      alert(message)
      setToggleLogin(false)
      navigate("/app")
    }

  return (
    <form className='b__home-form' onSubmit={handleSubmit(onSubmit)}>
      <div className="b__home-form--control">
        <label htmlFor="username">Enter Username</label>
        <input type="text" {...register("username",{required: "Username is required"})} id="username"/>
        <span className="error">{errors.username?.message}</span>
      </div>
      <div className="b__home-form--control">
        <label htmlFor="user_password">Enter Password</label>
        <input type="password" {...register("user_password",{required:"Password is required"})} id="user_password" />
        <span className="error">{errors.user_password?.message}</span>
      </div>
      <input className='form__btn' type="submit" value="Login"/>
    </form>
  )
}

export default Login