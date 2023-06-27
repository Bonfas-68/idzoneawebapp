import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FaFile,
  FaPhotoVideo,
  FaShare,
  FaVideo,
} from "react-icons/fa";
import { Context } from "../context/userContext";
// import { ContextIdeas } from "../context/ideasContext";

const AddIdea = ({ fetchIdeas}) => {
  const { user } = useContext(Context);
  // const { createIdeas } = useContext(ContextIdeas);
  const {handleSubmit, register,reset, formState:{errors}} = useForm()
  const onSubmit = async (data)=>{
    try {
      const res = await axios.post(
        "http://localhost:5000/ideas",
        { user_id: user?.user_id, idea_text:data.ideas_text },
        {
          headers: { Authorization: `${user.token}` },
        }
      );
      const message = await res.data.message;
      alert(message);
      reset()
      fetchIdeas()
    } catch (error) {
      alert(error.message)
    }
    // if(user?.token){
    //   await axios.post("http://localhost:5000/ideas",{user_id:user?.user_id,idea_text:data.idea_text},{
    //     headers:{"Authorization": `${user.token}`}
    //   })
    // reset()
    // fetchIdeas()
    // }else{
    //   alert(res.data.error)
    // }
  }
  return (
    <div className="b__add-ideas">
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="b__form-control">
          <textarea
            {...register("idea_text", {required: "Add some text to verify your ways of doing things..."})}
            id="idea"
            placeholder="Tell me how you did it?"
          ></textarea>
          <span className="error">{errors?.idea_text?.message}</span>
        </div>
        <div className="b__add-ideas--btns">
          <div className="btn">
            <FaPhotoVideo  className="form-icon"/>
            <label htmlFor="photo">Upload Photo</label>
            <input style={{display: "none"}} type="file" name="photo" id="photo" />
          </div>
          <div className="btn">
            <FaVideo  className="form-icon"/>
            <label htmlFor="video">Upload video</label>
            <input style={{display: "none"}} type="file" disabled={true} name="video" id="video" />
          </div>
          <div className="btn">
            <FaFile  className="form-icon"/>
            <label htmlFor="textFile">Upload file</label>
            <input style={{display: "none"}} type="file" name="textFile" id="textFile" />
          </div>
          <button type="submit" className="btn__add">
              <FaShare  className="form-icon"/>
              add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddIdea;
