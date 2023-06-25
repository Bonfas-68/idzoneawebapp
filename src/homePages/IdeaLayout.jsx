import { useState, useEffect } from "react";
import Appideas from "../Appideas";
import AddIdea from "../components/AddIdea";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import Welcome from "../components/Welcome";
import Profile from "../components/Profile";

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
  const [toggleProfile, setToggleProfile] = useState(false)
  return (
    <>
      {user?.token && <AddIdea user={user} fetchIdeas={fetchIdeas} />}
      <Welcome user={user} toggleProfile={toggleProfile} setToggleProfile={setToggleProfile}/>
      {toggleProfile ? <Profile idea={myideas} user={user}/> : 
      <Appideas user={user} myideas={myideas} />}
    </>
  );
};

export default IdeaLayout;
