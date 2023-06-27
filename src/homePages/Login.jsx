import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../context/userContext";

const Login = ({ setToggleLogin }) => {
  const {login} = useContext(Context)
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
        await login(data)
        navigate("/app");
    } catch (err) {
      const errMsg = err.message;
    }
  };

  return (
    <form className="b__home-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="b__home-form--control">
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          {...register("username", { required: "Username is required" })}
          id="username"
        />
        <span className="error">{errors.username?.message}</span>
      </div>
      <div className="b__home-form--control">
        <label htmlFor="user_password">Enter Password</label>
        <input
          type="password"
          {...register("user_password", { required: "Password is required" })}
          id="user_password"
        />
        <span className="error">{errors.user_password?.message}</span>
      </div>
      <input className="form__btn" type="submit" value="Login" />
      <br />
      <p style={{fontSize: "1.6rem", color: "#ccc"}}>Have no account &mnsb; <Link style={{color: "whitesmoke"}} to="/">register</Link></p>
    </form>
  );
};

export default Login;
