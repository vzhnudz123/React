import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom';

const Bookview = () => {

    const[viewdata,setviewdata]=useState([]);
    const[refresh,setrefresh]=useState(false)


    let view=async()=>{
        try{
            let response=await axios.get("http://localhost:5000/lib/libview");
            setviewdata(response.data);
            console.log(response);
            

        }
        catch(error){
            console.log(error);
            

        }

    }

    useEffect(()=>{
        view()

    },[refresh])

    // const handledel=(id)=>{
    //     console.log("deleted id",id);
        
    // }

    let delected=(id)=>{
        try{
            let removeing=axios.delete(`http://localhost:5000/lib/libdelete/${id}`)
            setrefresh(!refresh)
          
        }
        catch(error){
            console.log(error);
            
        }
    }

    const update=(id)=>{
        console.log(id);
        

    }
  return (
    <div className='text-center'>
        <h1>My BOOKS</h1>

        {viewdata.map((item,index)=>(
            <div  key={index}>
               
                <h3>{item.name}</h3>
                <img src={`http://localhost:5000/uploads/${item.image}`} alt="" />

                <button onClick={()=>delected(item._id)} className='bg-red-600 text-red-50 h-10'>delete</button>

                <Link to={`/bookupdate/${item._id}`}>
                <button onClick={()=>update(item._id)} className='bg-green-600 h-10 ms-2'>update</button>
                </Link>

            </div>
            
        ))}

        
    </div>
  )
}

export default Bookview