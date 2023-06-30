import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { domain } from "../utils/Utils";

const Register = ({ setToggleLogin }) => {
  const navigate = useNavigate();
  const [file,setFile] = useState(null);
  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (validTypes.indexOf(file.type) === -1) {
      alert('File format is incorrect use .jpeg, .png or .jpg')
    } else if (file.size > 1024 * 1024 * 5) {
      alert('File size is too large')
    } else {
      return true;
    }
  }

  let message;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    if (!file) {
      alert('Please select an image');
    }else {

      validateFile(file);
      let user_image = Date.now() + file.name;
      const formData = new FormData();
      formData.append('username', data.username);
      formData.append('user_password', data.user_password);
      formData.append('user_email', data.user_email);
      formData.append('user_image', user_image);
      formData.append('file', file);
      // send to the server
      // saveImage(formData);
      try {
        const res = await axios.post(`${domain}/auth/register`,formData);
        const data = await res.data.message
        alert(data)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    const joinDate = Date.now().toString() 
    navigate("/login");
  };

  return (
    <div className="b__reg">
    <form className="b__home-form register" onSubmit={handleSubmit(onSubmit)} >
      <span className="message">{message}</span>
      <div className="b__home-form--control">
        <label htmlFor="profile">Upload Profile Image</label>
        <input
          type="file"
          style={{ display: "none" }}
          name="file"
          id="profile"
          onChange={(e)=> setFile(e.target.files[0])}
        />
      </div>
      {file && <img src={URL.createObjectURL(file)} className="b__home-form--photo"/>}
      <div className="b__home-form--control">
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
            maxLength: 80,
          })}
        />
        <span className="error">{errors && errors.username?.message}</span>
      </div>
      <div className="b__home-form--control">
        <label htmlFor="username">Enter Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("user_email", {
            required: "Email Address is required",
            pattern: /^\S+@\S+$/i,
          })}
        />
        <span className="error">{errors && errors.user_email?.message}</span>
      </div>
      <div className="b__home-form--control">
        <label htmlFor="user_password">Enter Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("user_password", {
            required: "Password is required",
            maxLength: 50,
          })}
        />
        <span className="error">{errors && errors.user_password?.message}</span>
      </div>
      <input className="form__btn" type="submit" value="Register" />
      <p>
        Have an account!! <Link to="/login">login</Link>{" "}
      </p>
    </form>
    </div>
  );
};

export default Register;
