import React, { useState } from 'react'
import datas from '../roomdata'
import Idea from './components/idea'

const Appideas = () => {
    const [data,setData] = useState(datas)
  return (
    <div className='b__ideas'>
        {
            data.map((idea)=>{
                return(
                    <Idea key={idea.id} {...idea}/>
                )
            })
        }
    </div>
  )
}

export default Appideas