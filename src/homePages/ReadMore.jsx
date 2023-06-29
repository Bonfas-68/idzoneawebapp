import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'

const ReadMore = ({ ideas}) => {
    
const {state} = useLocation()
console.log(location)
  return (
    <div className='read__more'>
        <div className="read">
        <img src={`http://localhost:5000/uploads/${state?.idea_img}`} alt="" />
            <h1>{state?.idea_title}</h1>
            <p>{state?.idea_text}</p>
        </div>
            <Link to='/app' className="read__more-url">
                <AiOutlineClose className="read__more-icon"/>
            </Link>
    </div>
  )
}

export default ReadMore