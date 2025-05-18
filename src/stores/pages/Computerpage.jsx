import React from 'react';
import { computerData } from "../data/computers";
import Navbar from '../components/Navbar';

const Computerpage = () => {
  return (
     <>
     <Navbar/>
          <div className='pagesection'>
             {computerData.map((item)=>{
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

export default Computerpage



