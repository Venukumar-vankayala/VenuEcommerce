import React from 'react'
import {computerData} from '../data/computers'

const Computer = () => {
    const computers = computerData.slice(0,5)
  return (
    <>
    <h1>Computer</h1>
    <div className='prosection'>

        
{ computers.map((item)=>{
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

export default Computer