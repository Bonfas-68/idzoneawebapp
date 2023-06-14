import React from 'react'

const Categories = () => {
  return (
    <div className='b__categories'>
        <div className="b__category-header">Our Main Domains</div>
      <div className="b__category"><button className='cat_btn'>Religion</button></div>
      <div className="b__category"><button className='cat_btn'>Technology</button></div>
      <div className="b__category"><button className='cat_btn'>Education</button> </div>
      <div className="b__category"><button className='cat_btn'>Business</button> </div>
      <div className="b__category"><button className='cat_btn'>Science</button></div>
      <div className="b__category"><button className='cat_btn'>History</button></div>
      <div className="b__category"><button className='cat_btn'>Agriculture</button></div>
      <div className="b__category"><button className='cat_btn'>Environment</button></div>
      <div className="b__category"><button className='cat_btn'>Politics</button></div>
    </div>
  )
}

export default Categories