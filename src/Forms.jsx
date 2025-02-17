import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Forms = () => {
    const[data,setData]=useState([]);


    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const submit=(event)=>{
        event.preventDefault()
        setData(data);
        console.log(data);
        toast.error("success");
        
        
    }
  return (
    <div>
        <form action="" onSubmit={submit}>
            <label htmlFor="">name</label>
            <input type="text" onChange={handlechange} name='name'/>
            <label htmlFor="">email</label>
            <input type="email" onChange={handlechange} name='email' />

            <button type='submit'>submit</button>
            {/* <button onClick={submit}>Make me a toast</button> */}
            <Toaster />

        </form>
    </div>
  )
}

export default Forms