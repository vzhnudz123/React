import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import axios from 'axios';

const Bookupdate = () => {

    const {id}=useParams();
    console.log("id is",id);
    

    const[updating,setupdating]=useState("");

    const fetching=async()=>{
        try{

            let res=await axios.get(`http://localhost:5000/lib/edit/${id}`)
            setupdating(res.data);

        }
        catch(error){
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetching();

    },[])

    const handlesubmit=async(event)=>{
        event.preventDefault();
        try{
            let data=await axios.put(`http://localhost:5000/lib/libupdate/${id}`,updating)
            console.log(data.updating);
            

        }
        catch(error){
            console.log(error);
            
        }

    }

    const handlechange=(event)=>{
        setupdating({...updating,[event.target.name]:event.target.value});

    }





  return (
    <div>
        <form onSubmit={handlesubmit} action="">
        <input onChange={handlechange} type="text" placeholder={updating.name} name='name' />
        <button className='bg-red-600' type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Bookupdate