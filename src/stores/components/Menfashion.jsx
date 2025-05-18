import React from 'react'
import { menData } from '../data/men'

const Menfashion = () => {
    const mendata= menData.slice(0,5)
  return (
    <>
    <h1>Men fashions</h1>
    <div className='prosection'>
    { mendata.map((item)=>{
     return (
      <div className='imgsection'>
      <img className='img' src={item.image} alt="" />
      

    </div>

   )
   })}
   </div>
    
    
    </>
  )
}

export default Menfashion