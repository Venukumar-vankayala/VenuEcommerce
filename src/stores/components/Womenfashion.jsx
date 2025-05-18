import React from 'react'
import { womanData } from '../data/woman'

const Womenfashion = () => {
    const woman = womanData.slice(0,5)
  return (
    <>
    <h1>Women fashions</h1>
    <div className='prosection'>
    { woman.map((item)=>{
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

export default Womenfashion