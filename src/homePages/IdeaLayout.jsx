import React from "react";
import Appideas from "../Appideas";
import AddIdea from "../components/AddIdea";
import { useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const IdeaLayout = () => {
  const { state } = useLocation();
  const user = state.user;
  return (
    <>
      {user?.token && <AddIdea user={user}/>}
      <div className="welcome">
        <AiOutlineUser className="welcome__icon"/>
        <h2 className="welcome__name">Welcome!  {user?.username}✨</h2>
        <span className="welcome__email">{user?.user_email}</span>
        <p className="welcome__text">Your friends would love to hear your way of doing things.</p>
      </div>
      <Appideas user={user} />
    </>
  );
};

export default IdeaLayout;
