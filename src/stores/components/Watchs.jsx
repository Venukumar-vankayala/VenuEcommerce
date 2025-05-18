import React from 'react'
 import watchData from '../data/watch'

const Watchs = () => {
    const watchsData = watchData.slice(0,5)
  return (
    <>
    <h1>Watchs</h1>
    <div className='prosection'>

        
{ watchsData.map((item)=>{
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

export default Watchs