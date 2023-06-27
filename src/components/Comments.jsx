import React, { useContext, useEffect, useState } from "react";
import { FaCommentSlash, FaEdit, FaTrash, FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Context } from "../context/userContext";

const Comments = ({ idea_id }) => {
  const {user} = useContext(Context)
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    const res = await axios.get("http://localhost:5000/api/comments", {
      headers: { Authorization: `${user.token}` },
    });
    const filteredComments = res?.data?.filter(
      (comments) => comments?.idea_id === idea_id
    );
    setComments(filteredComments);
  };
  useEffect(() => {
    getComments();
  }, [comments]);
  const handleDelete = async(id) =>{
  try{
      const res = await axios.delete(`http://localhost:5000/api/comment/${id}`, {
      headers: { Authorization: `${user.token}` },
    });
    const message = res.data
    alert(message)
  }catch(error){
    alert(error.message)
  }
    
  }
  const handleEdit = async(id) =>{
    try{
    const res = await axios.put(`http://localhost:5000/api/comment/${id}`, {
      headers: { Authorization: `${user.token}` },
    });
    const message = await res.data
    alert(message)
  }catch(error){
    alert(error.message)
  }
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post(
      "http://localhost:5000/api/comments",
      { user_id: user.user_id, idea_id, comment: data.comment },
      {
        headers: { Authorization: `${user.token}` },
      }
    );
    reset();
  };
  return (
    <div className="b__comments">
      <div className="add_comment">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("comment", { required: "Add a comment!!" })}
            placeholder="Enter a comment..."
          ></textarea>
          {errors && <p className="errors">{errors?.comment?.message}</p>}
          <button onClick={() => getComments()}>add comment</button>
        </form>
      </div>
      <div className="view_comment">
        {comments.length === 0 ? (
          <div className="no-comment">
          <FaCommentSlash className="no-comment_icon" />
          <span>No comments!! add one</span>
        </div>
        ) : (
          
          comments.map((com) => (
            <div className="comment">
              <div className="userinfo">
                <FaUserCircle className="user_icon" />
                <span>{com.username}</span>
              </div>
              <p className="content">{com.comment}</p>
              <div className="actions">
                <FaTrash className="actions__icon" onClick={() => handleDelete(com.comment_id)} />
                <FaEdit  className="actions__icon" onClick={() => handleEdit(com.comment_id)}/>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
