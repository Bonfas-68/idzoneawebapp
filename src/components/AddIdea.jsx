import axios from "axios";
import { useContext, useState } from "react";
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
  const [file,setFile] = useState(null);
  const validateFile = (file) => {
    const validTypes = ['image/jpeg','video/mp4', 'image/jpg', 'image/png'];
    if (validTypes.indexOf(file.type) === -1) {
      alert('File format is incorrect use .jpeg, .png or .jpg')
    } else if (file.size > 1024 * 1024 * 5) {
      alert('File size is too large')
    } else {
      return true;
    }
  }
  // const { createIdeas } = useContext(ContextIdeas);
  const {handleSubmit, register,reset, formState:{errors}} = useForm()
  const onSubmit = async (data)=>{
    if (!file) {
      alert('Please select an image');
    }else {

      validateFile(file);
      let idea_img = Date.now() + file.name;
      const formData = new FormData();
      formData.append('user_id', user.user_id);
      formData.append('idea_title', data.idea_title);
      formData.append('idea_text', data.idea_text);
      formData.append('idea_img', idea_img);
      formData.append('file', file);
    try {
      const res = await axios.post(
        "http://localhost:5000/ideas",formData,
        {
          headers: { Authorization: `${user.token}` },
        }
      );
      const message = await res.data.message;
      reset()
      fetchIdeas()
      // alert(message);
    } catch (error) {
      alert(error.message)
    }}
  }
  return (
    <div className="b__add-ideas">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="b__form-control">
        <input type="text" placeholder="Your title " {...register("idea_title", {required: "Add title to your post"})} id="" />
        <span className="error">{errors?.idea_title?.message}</span>
          <textarea
            {...register("idea_text", {required: "Add some text to verify your ways of doing things..."})}
            id="idea"
            placeholder="Tell me how you did it?"
          ></textarea>
          <span className="error">{errors?.idea_text?.message}</span>
          {/* {file ?<img width={50} height={50} src={URL.createObjectURL(file)} alt="photot to share" />: null} */}
        </div>
        <div className="b__add-ideas--btns">
          <div className="btn">
            <FaPhotoVideo  className="form-icon"/>
            <label htmlFor="photo">Upload Photo</label>
            <input style={{display: "none"}} type="file" name="file" id="photo" onChange={(e)=> setFile(e.target.files[0])}/>
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
