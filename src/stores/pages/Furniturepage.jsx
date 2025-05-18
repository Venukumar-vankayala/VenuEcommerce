import React from 'react'
import Navbar from '../components/Navbar'
import { furnitureData } from '../data/furniture'

const Furniturepage = () => {
  return (
     <>
     <Navbar/>
       <div className='pagesection'>
                  {furnitureData.map((item)=>{
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

export default Furniturepage