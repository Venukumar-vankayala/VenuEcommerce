import React from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'

const Menpage = () => {
  return (
    <>
     <Navbar/>
       <div className='pagesection'>
                  {menData.map((item)=>{
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

export default Menpage