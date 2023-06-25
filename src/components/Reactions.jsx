import React from "react";
import { FaComment, FaEdit, FaHeart, FaShare, FaVoteYea } from "react-icons/fa";

const Reactions = ({showComments, id}) => {
  return (
    <div className="reactions">
      <button className="reactions__btn">
        <FaHeart className="reactions__btn-icon" /> 
        <span>like</span>
      </button>
      <button className="reactions__btn" onClick={()=>showComments(id)}>
        <FaComment className="reactions__btn-icon" /> 
        <span>comment</span>
      </button>
      <button className="reactions__btn">
        <FaShare className="reactions__btn-icon" /> 
        <span>share</span>
      </button>
      <button className="reactions__btn">
        <FaVoteYea className="reactions__btn-icon" /> 
        <span>votes</span>
      </button>
      <button className="reactions__btn">
        <FaEdit className="reactions__btn-icon" /> 
        <span>edit</span>
      </button>
    </div>
  );
};

export default Reactions;
