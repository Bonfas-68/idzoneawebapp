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
      {toggleLogin && <Home setToggleLogin={setToggleLogin}/>}
      <Routes>
        <Route path="/" element={toggleLogin ? <Home/> : <Register setToggleLogin={setToggleLogin}/>}/>
        <Route path="/app" element={<IdeaLayout/>} />
      </Routes>
      

      <Categories /> 
    </BrowserRouter>
  )
}

export default App
