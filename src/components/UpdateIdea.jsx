import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Context } from "../context/userContext";

const UpdateIdea = ({ idea, setToggleUpdate, fetchIdeas }) => {
  const [text, setText] = useState("");
  const {user} = useContext(Context)
  useEffect(() => {
    setText(idea.idea_text);
  }, []);

  const getidea = async (id) =>{
    await axios.get(`http://localhost:5000/idea/${id}`,
    {
      headers: { Authorization: `${user.token}` },
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(
        `http://localhost:5000/idea/${idea.idea_id}`,
        { idea_text: text },
        {
          headers: { Authorization: `${user.token}` },
        }
      );

    fetchIdeas()
        // getidea(idea.idea_id)
      setToggleUpdate(false)
      alert(res.data.message);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="b__update-idea">
      <form onSubmit={handleSubmit}>
        <textarea name="idea_text" id="idea_text" value={text} onChange={(e)=> setText(e.target.value)}></textarea>
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UpdateIdea;
