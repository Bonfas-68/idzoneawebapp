import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ideasPhoto from "../images/post-1.jpg";
import userimage from "../images/user-1.jpg";
import Reactions from "./Reactions";
import Comments from "./Comments";
import UpdateIdea from "./UpdateIdea";
import { Context } from "../context/userContext";
import noimage from '../images/placeholder.jpeg';

const Idea = ({ idea, fetchIdeas }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate()
  const [toggleComments, setToggleComments] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const showComments = () => {
    setToggleComments(!toggleComments);
  };
  const goReadMore = (idea) => {
    navigate("./readmore",{state: idea})
  };
  console.log(idea)
  const showUpdateForm = (id) => {
    setToggleUpdate(true);
  };
  // ideas.map((ideas)=>)
  return (
    <div key={idea?.idea_id} className="b__idea">
      <Reactions
        fetchIdeas={fetchIdeas}
        user={user}
        idea={idea}
        showComments={showComments}
        showUpdateForm={showUpdateForm}
      />
      {toggleUpdate && idea?.idea_id ? (
        <UpdateIdea
          setToggleUpdate={setToggleUpdate}
          idea={idea}
          fetchIdeas={fetchIdeas}
        />
      ) : null}
      <div className="b__idea-image">
        <img src={`http://localhost:5000/uploads/${idea?.idea_img}`} alt="photo" />
      </div>
      <div className="b__idea-user">
        <div className="b__user">
          <div className="b__user-img">
            <img  className="user__icon"  src={`http://localhost:5000/uploads/${idea?.user_image}`} />
          </div>
          <div className="b__user-details">
            <h3>{idea?.username}</h3>
          </div>
        </div>
        <div className="b__idea-a">
          <h2>{idea?.idea_title}</h2>
          <p>{idea?.idea_text.slice(0,255) || <span>no content</span> }<span onClick={()=> goReadMore(idea)} className="read_url" >...</span></p>
          <span>{idea?.created_at?.data}</span>
        </div>
      </div>
      <div className="b__idea-votes">
        <span>{idea?.votes}</span>
      </div>
      {toggleComments && idea?.idea_id && (
        <Comments user={user} idea_id={idea?.idea_id} />
      )}
    </div>
  );
};

export default Idea;
