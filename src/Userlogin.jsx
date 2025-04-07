import React, { useState } from 'react';

const Userlogin = () => {
    const[data,setData]=useState([]);

    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})


    }
    const submit=(event)=>{
        event.preventDefault()
        setData(data);
        console.log(data);
        

    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <form onSubmit={submit} className='d-flex flex-column w-25 p-4 border'>
        <label htmlFor="" className='bg-orange-600'>Name</label>
        <input type="text" onChange={handlechange} name='name' />
        
        <label htmlFor="">Email</label>
        <input type="email" name='email' onChange={handlechange} />
        
        <label htmlFor="">Password</label>
        <input type="password" name='password' onChange={handlechange} />
        
        <button type="submit" className='mt-3'>Submit</button>
      </form>
    </div>
  );
}

export default Userlogin;
