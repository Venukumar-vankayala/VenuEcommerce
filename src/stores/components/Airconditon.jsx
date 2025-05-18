import React from 'react'
import { acData } from '../data/ac'

const Airconditon = () => {
    const acdata= acData.slice(0,5)
  return (
    <>
    <h1>Air conditons</h1>
    <div className='prosection'>

        
{ acdata.map((item)=>{
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

export default Airconditon