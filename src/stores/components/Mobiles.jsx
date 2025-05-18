import React from 'react'
import {mobileData} from '../data/mobiles'
const Mobiles = () => {

    const fiveimage= mobileData.slice(0,5)
  return (
      <>
      <h1>Mobiles</h1>
       <div className='prosection'>

        
        { fiveimage.map((item)=>{
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

export default Mobiles