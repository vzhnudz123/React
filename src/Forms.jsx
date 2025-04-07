import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Forms = () => {
    const[data,setData]=useState([]);


    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const submit=async(event)=>{
        event.preventDefault()
        let response=await axios.post("http://localhost:8000/user/adduser",data)
        setData(data);
        console.log(response);
    
        console.log(data);
        toast.error("success");
        
        
    }
  return (
    <div>
        <form action="" onSubmit={submit}>
            <label htmlFor="">name</label>
            <input type="text" onChange={handlechange} name='name'/>
            <label htmlFor="">email</label>
            <input type="text" onChange={handlechange} name='description' />
            
            <button type='submit'>submit</button>
            {/* <button onClick={submit}>Make me a toast</button> */}
            <Toaster />

        </form>
    </div>
  )
}

export default Forms