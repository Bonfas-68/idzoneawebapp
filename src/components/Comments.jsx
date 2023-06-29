import React, { useContext, useEffect, useState } from "react";
import { FaCommentSlash} from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Context } from "../context/userContext";
import Comment from "./Comment";

const Comments = ({ idea_id }) => {
  const { user } = useContext(Context);
  const [comments, setComments] = useState([]);


  //get all comments
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
  //delete comment
  

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
  const com = comments.map((com) => com);
  return (
    <div className="b__comments">
      <div className="add_comment">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("comment", { required: "Add a comment!!" })}
            placeholder="Enter a comment..."
          ></textarea>
          {errors && <p className="errors">{errors?.comment?.message}</p>}
          <button onClick={() => getComments()} type="submit">
            add comment
          </button>
        </form>
      </div>
      <div className="view_comment">
        {comments.length === 0 ? (
          <div className="no-comment">
            <FaCommentSlash className="no-comment_icon" />
            <span>No comments!! add one</span>
          </div>
        ) : (
          comments.map((com) => <Comment com={com} getComments={getComments} />)
        )}
      </div>
    </div>
  );
};

export default Comments;
