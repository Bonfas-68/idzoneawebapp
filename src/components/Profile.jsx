import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const Profile = ({ user, idea }) => {
  // console.log(user)
  const [data, setData] = useState([]);
  const getProf = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/profile/${user?.user_id}`,
        {
          headers: { Authorization: `${user.token}` },
        }
      );
      const profdata = await res.data;
      setData(profdata);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProf();
  }, []);
  const text = idea.map((t)=> t)
  const myt = text.filter((te) => te.username === user.username)
  return (
    <>
      {data.map((prof) => (
        <div className="profile">
          <div className="profile-intro">
            <span>{user.username.split(" ")[0]}@IdZonea</span>
          </div>
          <div className="profile-bio">
            <div className="user_info">
              <FaUser className="user_icon"/>
              <h4><p>Name: </p>{user.username}</h4>
              <h6><p>Email: </p>{user.user_email}</h6>
            </div>
            <div className="user_ideas">
              <h2>Ideas Shared</h2>
              {myt.map((text)=>(
                <div className="idea">
                  <p>{text.idea_text}</p>
                  <span><FaUser className="idea_icon" /> <em>{text.username}</em></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Profile;
