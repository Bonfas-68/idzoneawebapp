import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

const Register = ({ setToggleLogin }) => {
  const navigate = useNavigate();

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      return res.data
    } catch (error) {
      console.log(error);
    }
  };

  let message;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const user_image = await upload(data.file);
    const res = await axios.post("http://localhost:5000/auth/register",{user_image,...data} );
    const joinDate = new Date()
    let date = joinDate.toDateString()
    message = await res?.data?.message;
    
    navigate("/login", {state:date});
  };

  return (
    <div className="b__reg">
    <form method="POST" className="b__home-form register" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <span className="message">{message}</span>
      <div className="b__home-form--control">
        <label htmlFor="profile">Upload Profile Image</label>
        <input
          type="file"
          style={{ display: "none" }}
          name="file"
          id="profile"
        />
      </div>
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
