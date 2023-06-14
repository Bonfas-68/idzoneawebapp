import { useState } from 'react'
// import images from './images/hero-2.jpg'
import rooms from '../room-homepage-master/roomdata'

const RoomSliders = () => {
  const [start, setStart] = useState(0);
  // let start = 0;
  const {title, text, image } = rooms[start];
  console.log(rooms)
  console.log(rooms[1].title)

  const validNumber = number =>{
    if(number > rooms.length - 1){
      return 0
    }
    if(number < 0){
      return rooms.length - 1
    }
  }

  const prevSlider = () =>{
    if(start === 0){
      setStart(rooms.length - 1)
      return 
    }
    setStart(start - 1)
  }
  const nextSlider = () => {
    if(start === rooms.length - 1){
      setStart(0)
      return 
    }
    setStart(start + 1)
  }
  return (
    <div className='slider-container'>
      <div className="slider">
        <div className="image">
          <img src={image} alt="slider image" className='slider-image'/>
          <div className="slider-buttons">
          <button className="prev-btn" onClick={prevSlider}>
          <img src="/src/room-homepage-master/images/icon-angle-left.svg" alt="left arrow button" />
          </button>
          <button className="next-btn" onClick={nextSlider}>
          <img src="/src/room-homepage-master/images/icon-angle-right.svg" alt="right arrow button" />
          </button>
      </div>
        </div>
        
        <div className="slider-content">
          <h1>{title}</h1>
          <p>{text}</p>
          <button className='show-btn'>Shop now <img src="src/room-homepage-master/images/icon-arrow.svg" alt="" /></button>
        </div>
      </div>

      
    </div>
  )
}

export default RoomSliders