import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'

const Mobilepage = () => {
  return (
       
       <>
       <Navbar/>
       <div className='pagesection'>
        {mobileData.map((item)=>{
            return(
               <div className='pagesection_card'>
                <img src={item.image} alt="" />
                <h4>Model:{item.model}</h4>
                
                
                </div>
            )
        })}
       </div>
       
       
       </>
      
      
      
  )
}

export default Mobilepage