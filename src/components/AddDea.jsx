import React from 'react'

const AddDea = () => {
  return (
    <div className='b__add-ideas'>
        <form>
            <div className="b__form-control">
              <textarea name="idea" id="idea" placeholder='Do have any method?'></textarea>
           
            </div>
            <div className="b__form-buttons">
                <button><span className='form-icon'>📷</span>Upload Photo</button>
                <button><span className='form-icon'>🎥</span>upload Video</button>
                <button><span className='form-icon'>📝</span>Upload file</button>
                <button type='submit' className='form-btn--add'><span className='form-icon'>🏹</span>add</button>
            </div>
        </form>
    </div>
  )
}

export default AddDea
