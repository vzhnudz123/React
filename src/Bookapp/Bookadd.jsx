import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Bookadd = () => {

    const[data,setdata]=useState({name:"",price:""});//there used object
    console.log(data);

    const handlechange=(event)=>{
        const { name, value } = event.target;
        setdata({...data,[name]:value});


    }
    

    let submit=async(event)=>{
        try{
        event.preventDefault()

        let response=await axios.post("http://localhost:5000/lib/libadd",data)
        
        console.log("response isss",response);
        }
        catch(error){
            console.log(error);
            

        }
       
    }
    





    // const handlesubmit=()=>{
        

    // }
  return (
    <div>
        <form onSubmit={submit} action="">
        <input onChange={handlechange} value={data.name} className='bg-red-600 text-center' type="text" name="name" />
        <input onChange={handlechange} value={data.number} type="number" name='price' />
        <button type='text'>submit</button>

        </form>
    </div>
  )
}

export default Bookadd