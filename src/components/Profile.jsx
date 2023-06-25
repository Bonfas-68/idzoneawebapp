import axios from 'axios';
import React, { useEffect } from 'react'

const Profile = ({user}) => {
  console.log(user)
  const getProf = async ()=>{
    try {
      const res = await axios.get("http://localhost:5000/api/profile", {
        headers:{"Authorization" : `${user.token}`}
      })
      const profdata = await res.data;
      console.log(profdata)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    getProf()
  },[])
  return (
    <div className='b__profile'>
      <div className="profile-intro">profile</div>
      <div className="profile-bio">
      profile bio
      </div>
      <div className="user_ideas">
      user ideas
      </div>
    </div>
  )
}

export default Profile