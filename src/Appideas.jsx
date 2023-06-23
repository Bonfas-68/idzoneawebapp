import React, { useState } from 'react'
import datas from '../roomdata'
import Ideas from './components/idea'
import AddIdea from './components/AddIdea'

const Appideas = ({user}) => {
    const [data,setData] = useState(datas)
  return (
    <div className='b__ideas'>
        {
            data.map((idea)=>{
                return(
                    <Ideas key={idea.id} {...idea}/>
                )
            })
        }
    </div>
  )
}

export default Appideas