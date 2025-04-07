import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Bookdel = () => {
    const[del,setdel]=useState("");

    let {id}=useParams();
    console.log(id);
    

    const deleting=async()=>{
        try{
            let response=await axios.delete(`http://localhost:5000/lib/libdelete/${id}`);
            console.log(response);
            
        }
        catch(error){
            console.log(error);
            
        }
    }

    useEffect(()=>{

        deleting();

    },[])

  return (
    <div>Bookdel</div>
  )
}

export default Bookdel