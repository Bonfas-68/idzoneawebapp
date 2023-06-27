import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  FaComment,
  FaEdit,
  FaHeart,
  FaSave,
  FaShare,
  FaTrash,
  FaVoteYea,
} from "react-icons/fa";
import { Context } from "../context/userContext";

const Reactions = ({ showComments, showUpdateForm, idea,fetchIdeas }) => {
  const {user} = useContext(Context)
  //delete idea
  const deleteIdea = async (id) => {
    try {
      if (user.user_id === idea.user_id) {
        const res = await axios.delete(`http://localhost:5000/idea/${id}`, {
          headers: { Authorization: `${user.token}` },
        });
        const data = await res?.data?.message;
        alert(data);
        fetchIdeas()
      } else {
        alert(res.data.error);
      }
    } catch (error) {
      // alert(error.message)
      console.log(error.message);
    }
  };
  return (
    <div className="reactions">
      <button className="reactions__btn">
        <FaHeart style={{ color: "red" }} className="reactions__btn-icon" />
        <span>like</span>
      </button>
      <button className="reactions__btn" onClick={() => showComments()}>
        <FaComment className="reactions__btn-icon" />
        <span>comment</span>
      </button>
      {user.user_id === idea.user_id ? (
        <button
          className="reactions__btn"
          onClick={() => deleteIdea(idea.idea_id)}
        >
          <FaTrash style={{ color: "red" }} className="reactions__btn-icon" />
          <span>delete</span>
        </button>
      ) : (
        <button className="reactions__btn">
          <FaShare className="reactions__btn-icon" />
          <span>share</span>
        </button>
      )}

      <button className="reactions__btn">
        <FaVoteYea className="reactions__btn-icon" />
        <span>votes</span>
      </button>
      {user.user_id === idea.user_id ? (
        <button className="reactions__btn" onClick={() => showUpdateForm()}>
          <FaEdit className="reactions__btn-icon" />
          <span>edit</span>
        </button>
      ) : (
        <button className="reactions__btn">
          <FaSave className="reactions__btn-icon" />
          <span>Save</span>
        </button>
      )}
    </div>
  );
};

export default Reactions;
