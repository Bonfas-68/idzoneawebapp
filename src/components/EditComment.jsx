import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/userContext";
import axios from "axios";

const EditComment = ({ com, setShowEdit, getComments }) => {
  const { user } = useContext(Context);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setComment(com?.comment);
  }, []);
  const handleSubmit = async (e,id) => {
    e.preventDefault()}
  const handleEdit = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/comment/${id}`,{comment}, {
        headers: { Authorization: `${user.token}` },
      });
      const message = await res.data.message;
      alert(message);
      setShowEdit(false);
      getComments();
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <div className="b__update-comment">
      <form onSubmit={handleSubmit}>
        <textarea
        rows="10"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit" onClick={()=> handleEdit(com.comment_id)}>update</button>
      </form>
    </div>
  );
};

export default EditComment;
