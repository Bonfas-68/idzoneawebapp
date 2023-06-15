import React from 'react'

const Sidebar = () => {
  return (
    <div className='b__sidebar'>
      <div className="b__side-button">
        <button className='active-btn'>
        <span>🏠</span>
        <div className="b__side-button--text">Home</div>
        </button>
      </div>
      <div className="b__side-button">
        <button>
        <span>👤</span>
        <div className="b__side-button--text">Profile</div>
        </button>
      </div>
      <div className="b__side-button">
        <button id='top'>
        <span>👨‍👧‍👧</span>
        <div className="b__side-button--text">Followers</div>
        <span className="top__num">12</span>
        </button>
      </div>
      <div className="b__side-button">
        <button id='top'>
        <span>❎</span>
        <div className="b__side-button--text">Votes</div>
        <span className="top__num">22</span>
        </button>
      </div>
      <div className="b__side-button">
        <button id='top'>
        <span>🏫</span>
        <div className="b__side-button--text">Collections</div>
        <span className="top__num">2</span>
        </button>
      </div>
      <div className="b__side-button"><button>
        <span></span>Logout</button></div>
      <div className="b__side-button"><button>
        <span></span>Share a method</button> </div>
    </div>
  )
}

export default Sidebar
