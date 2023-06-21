// import Room from './room-homepage-master/Room'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Appideas from "./Appideas"
import AddDea from "./components/AddDea"
import Categories from "./components/Categories"
import Sidebar from "./components/Sidebar"
import "./styles.scss"
import { useState } from "react"
import Home from "./homePages/Home"


function App() {
  const [toggleLogin, setToggleLogin] = useState(false)
  return (
    <BrowserRouter>
    {toggleLogin && <Home setToggleLogin={setToggleLogin}/>}
      <Sidebar setToggleLogin={setToggleLogin}/>
      <AddDea />
      <Appideas/>
      <Categories /> 
    </BrowserRouter>
  )
}

export default App
