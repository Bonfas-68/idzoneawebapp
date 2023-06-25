import { useState, useEffect } from "react";
import Appideas from "../Appideas";
import AddIdea from "../components/AddIdea";
import { useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";

const IdeaLayout = () => {
  
  const { state } = useLocation();
  const user = state
  const [data, setData] = useState([]);
  const fetchIdeas = async () => {
    try {
      const res = await axios.get("http://localhost:5000/ideas", {
        headers: { "Authorization": `${user.token}` }
      })
      const ideas = await res.data
      // console.log(ideas)
      setData(ideas)
    } catch (error) {
      alert(error.message)
    }
  };
  useEffect(() => {
    fetchIdeas()
  }, []);
  const myideas = data.map((idea, index) => idea)
  return (
    <>
      {user?.token && <AddIdea user={user} fetchIdeas={fetchIdeas} />}
      <div className="welcome">
        <AiOutlineUser className="welcome__icon" />
        <h2 className="welcome__name">Welcome!  {user?.username}✨</h2>
        <span className="welcome__email">{user?.user_email}</span>
        <p className="welcome__text">Your friends would love to hear your way of doing things.</p>
      </div>
      <Appideas user={user} myideas={myideas} />
    </>
  );
};

export default IdeaLayout;
