import React from 'react';
import { womanData } from '../data/woman';
import Navbar from '../components/Navbar';

const Womenpage = () => {
  return (
    <>
    <Navbar/>
      <div className='pagesection'>
                 {womanData.map((item)=>{
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

export default Womenpage