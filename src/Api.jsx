import React, { useState } from 'react'
import axios from 'axios'

const Api = () => {
    const[data,setData]=useState([]);

    let app=async()=>{
        let response=await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data)
    }
    console.log(data);
    
  return (
    <div>
        <button onClick={app}>click</button>
       {data.map((item,index)=>(

        <div key={item.id}>
            <h2 className='text-dark'>{item.title}</h2>
            <h2>{item.userId}</h2>
        </div>

       ))}



        </div>
  )
}

export default Api