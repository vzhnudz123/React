import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export const Profile = () => {
    const id=localStorage.getItem('id')
    const token=localStorage.getItem('token')
    const[data,setdata]=useState([]);
    const navigate=useNavigate()
    console.log(id);

    const Api=async()=>{

        try{
            let response=await axios.get(`http://localhost:8000/user/vprofile/${id}`,{
                headers:{Authorization:`Bearer:${token}`}
            })
            setdata(response.data);
        }
        catch(error){
            console.log(error);
            
        }

    }
    console.log(data);

    useEffect(()=>{
        Api()

    },[])
    const logout=()=>{
        localStorage.removeItem("id")
        localStorage.removeItem("token")
        navigate('/logins')
    }
    
    
  return (
    <div>
        <h1>PROFILE</h1>
        <h3>{data.name}</h3>
<button onClick={logout}>log out</button>
    </div>
  )
}
