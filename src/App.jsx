// import Room from './room-homepage-master/Room'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Categories from "./components/Categories"
import Sidebar from "./components/Sidebar"
import IdeaLayout from "./homePages/IdeaLayout"
import "./styles.scss"
import { useEffect, useState } from "react"
import Home from "./homePages/Home"
import Register from "./homePages/Register"
import Profile from "./components/Profile"
import ReadMore from "./homePages/ReadMore"
import UpdateIdea from "./components/UpdateIdea"



function App() {
  const [toggleLogin, setToggleLogin] = useState(false)
  const [tyme, setTyme] =useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    setInterval(() => {
      setTyme((t)=> t = new Date().toLocaleTimeString())
    }, 1000);
  }, [])
  return (
    <BrowserRouter>
    <div id="root_intro"><h1>A problem shared is problem halved!!! Share More @idzonea to help another </h1><span>{tyme >=12 ? `${tyme} PM` :`${tyme} AM` }</span></div>
      <Sidebar setToggleLogin={setToggleLogin}/>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/" element={<Register />}/>
        <Route path="/app" element={<IdeaLayout/>}>
          <Route path="/app/readmore" element={<ReadMore />} />
          <Route path="/app/update" element={<UpdateIdea />} />
        </Route>
      </Routes>
      <Categories /> 
    </BrowserRouter>
  )
}

export default App
