// import Room from './room-homepage-master/Room'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Categories from "./components/Categories"
import Sidebar from "./components/Sidebar"
import IdeaLayout from "./homePages/IdeaLayout"
import "./styles.scss"
import { useState } from "react"
import Home from "./homePages/Home"
import Register from "./homePages/Register"


function App() {
  const [toggleLogin, setToggleLogin] = useState(false)
  return (
    <BrowserRouter>
      <Sidebar setToggleLogin={setToggleLogin}/>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/" element={<Register />}/>
        <Route path="/app" element={<IdeaLayout/>} />
      </Routes>
      <Categories /> 
    </BrowserRouter>
  )
}

export default App
