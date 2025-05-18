import React from 'react'
import Navbar from '../components/Navbar';
import { tvData } from '../data/tv';

const Tvspage = () => {
  return (
   <>
   <Navbar/>
     <div className='pagesection'>
                {tvData.map((item)=>{
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

export default Tvspage