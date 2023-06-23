import React from "react";
import {
  FaFile,
  FaPhotoVideo,
  FaShare,
  FaVideo,
} from "react-icons/fa";

const AddIdea = () => {
  return (
    <div className="b__add-ideas">
      <form>
        <div className="b__form-control">
          <textarea
            name="idea"
            id="idea"
            placeholder="Tell me how you did it?"
          ></textarea>
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
