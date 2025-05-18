import React from 'react'
import {furnitureData} from '../data/furniture';

const Furniture = () => {
    const furniture= furnitureData.slice(0,5)
  return (
    <>
    <h1>Furnitures</h1>
    <div className='prosection'>

        
{ furniture.map((item)=>{
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

export default Furniture