import React, { useState } from 'react'

const Toggle = () => {
    const[color,setcolor]=useState(false);
    const[them,setthem]=useState(false);

    let change=()=>{
        
            setthem(true);

        
    }
    let reset=()=>{
        setthem(false);

    }
  return (
    <div>
    { them&&<div className='bg-dark' style={{height:"800px"}}>
    <button onClick={reset} className='p-3 bg-danger'>reset</button>

    </div>}
     <button onClick={change} className='p-3 bg-danger'>click</button>

     </div>
  )
}

export default Toggle