import React from 'react'

const Sidebar = () => {
  return (
    <div className='b__sidebar'>
      <div className="b__side-button"><button>Home</button></div>
      <div className="b__side-button"><button>Profile</button></div>
      <div className="b__side-button"><button>Followers</button></div>
      <div className="b__side-button"><button>Votes</button></div>
      <div className="b__side-button"><button>Collections</button></div>
      <div className="b__side-button"><button>Logout</button></div>
      <div className="b__side-button"><button>Share a method</button> </div>
    </div>
  )
}

export default Sidebar