import axios from "axios";
import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import NoIdeas from "./NoIdeas";
import { Context } from "../context/userContext";

const Profile = ({ideas}) => {
  const { user } = useContext(Context);
  
  const text = ideas.map((t)=> t)
  const myt = text.filter((te) => te.username === user.username)
  return (
    <> <div className="profile">
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

              {myt.length ? myt.map((text)=>(
                <div className="idea">
                  <p>{text.idea_text}</p>
                  <span><FaUser className="idea_icon" /> <em>{text.username}</em></span>
                </div>
              )): <NoIdeas />}
            </div>
          </div>
        </div>
        {/* <Loader error={error} loading={loading} load={load}/> */}
    </>
  );
};

export default Profile;
