import React from 'react'

const AddDea = () => {
  return (
    <div className='b__add-ideas'>
        <form>
            <div className="b__form-control">
            <input type="text" placeholder='Do have any method?'/>
            </div>
            <div className="b__form-buttons">
                <button>Upload Photo</button>
                <button>upload Video</button>
                <button>Upload file</button>
                <button type='submit'>add</button>
            </div>
        </form>
    </div>
  )
}

export default AddDea