import React, { useContext, useState } from "react";
import EditComment from "./EditComment";
import { FaEdit, FaTrash, FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { Context } from "../context/userContext";

const Comment = ({ com, getComments }) => {
  const { user } = useContext(Context);
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/comment/${id}`,
        {
          headers: { Authorization: `${user.token}` },
        }
      );
      const message = res.data.message;
      // alert(message);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      {showEdit && (
        <EditComment
          com={com}
          setShowEdit={setShowEdit}
          getComments={getComments}
        />
      )}

      <div className="comment">
        <div className="userinfo">
        <img width={25} height={25} style={{borderRadius:"50%"}} className="user_icon"  src={`http://localhost:5000/uploads/${com?.user_image}`} />
          <span>{com.username}@idZonea</span>
        </div>
        <p className="content">{com.comment}</p>
        <div className="actions">
          {user.user_id === com.user_id ? (
            <>
              <FaTrash
                className="actions__icon"
                onClick={() => handleDelete(com.comment_id)}
              />
              <FaEdit
                className="actions__icon"
                onClick={() => setShowEdit(true)}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Comment;
