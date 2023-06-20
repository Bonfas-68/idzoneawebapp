import React from 'react'
import { FaUserNinja, FaUserNurse } from 'react-icons/fa'
import {useParams, Link} from 'react-router-dom';

const Footer = () => {
  
  return (
    <div className='app__footer'>
        <p>@idzonea web app &copy; 2023 </p>
        <a href="#">policy | regulations</a>
    </div>
  )
}

export default Footer
