import React from 'react'
import Navbar from '../components/Navbar';
import { fridgeData } from '../data/fridge';

const Fridgepage = () => {
  return (
   <>
   <Navbar/>
     <div className='pagesection'>
                {fridgeData.map((item)=>{
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

export default Fridgepage