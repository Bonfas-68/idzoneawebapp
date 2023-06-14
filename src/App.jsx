// import Room from './room-homepage-master/Room'

import Appideas from "./Appideas"
import AddDea from "./components/AddDea"
import Categories from "./components/Categories"
import Sidebar from "./components/Sidebar"
import "./ideas.css"

function App() {
  return (
    <>
      <Sidebar />
      <AddDea />
      <Appideas/>
      <Categories />
    </>
  )
}

export default App
