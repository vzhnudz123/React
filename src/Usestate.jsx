import React, { useState } from 'react'

const Usestate = () => {

    const[Data,setData]=useState(0);
    

    let increment=()=>{                                                                                                                                                                         
        setData(Data+1)
    } 
    let decrement=()=>{
        if(Data==0){
            setData(Data)
        }
        else{
            setData(Data-1)

        }
        
    }
  return (
    <div>

        <h2>{Data}</h2>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Usestate

