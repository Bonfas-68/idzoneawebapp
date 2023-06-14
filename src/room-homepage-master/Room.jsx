import RoomContent from './RoomContent'
import RoomNavbar from './RoomNavbar'
import RoomSliders from './RoomSlider'
import './room.css'

const Room = () => {
  return (
    <div className='rooms'>
        <RoomNavbar />
        <RoomSliders/>
        <RoomContent />
    </div>
  )
}

export default Room