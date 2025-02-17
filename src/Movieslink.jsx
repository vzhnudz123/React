import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Movieslink = () => {
    const[data,setdata]=useState('');
    const {id}=useParams()
    console.log(id);

    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
            console.log(response);
            setdata(response.data);
            
        }
        fetchdata()


    },[])
    console.log(data);
    


  return (
    <div>

        <img src={data.Poster} alt="" />
        <h2>{data.Title}</h2>
    </div>
  )
}

export default Movieslink