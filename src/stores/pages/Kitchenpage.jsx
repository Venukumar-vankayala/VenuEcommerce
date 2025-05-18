import React from 'react'
import Navbar from '../components/Navbar'
import { kitchenData } from '../data/kitchen'

const Kitchenpage = () => {
  return (
    <>
    <Navbar/>
      <div className='pagesection'>
                 {kitchenData.map((item)=>{
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

export default Kitchenpage