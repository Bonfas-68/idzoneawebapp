import { useState, useEffect, useContext } from "react";
import Appideas from "../Appideas";
import AddIdea from "../components/AddIdea";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import Welcome from "../components/Welcome";
import load from "../images/loader.svg";
import idea from "../images/idea.svg";

import Loader from "../components/Loader";
import NoIdeas from "../components/NoIdeas";
import { Context } from "../context/userContext";
// import { ContextIdeas } from "../context/ideasContext";

const IdeaLayout = () => {
  const { user, fetchAllIdeas, ideas } = useContext(Context);
  // const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const fetchIdeas = async () => {
    try {
      setLoading(true);
      fetchAllIdeas();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      alert(err.message);
    }
  };
  useEffect(() => {
    fetchIdeas();
  }, []);

  const [toggleProfile, setToggleProfile] = useState(false);

  return (
    <>
      {user?.token && <AddIdea fetchIdeas={fetchIdeas} />}
      <Welcome />
      {ideas.length ? (
        <Appideas ideas={ideas} fetchIdeas={fetchIdeas} />
      ) : (
        <>
          <NoIdeas />
          <Loader error={error} loading={loading} load={load} />
        </>
      )}
      <Outlet />
    </>
  );
};

export default IdeaLayout;
