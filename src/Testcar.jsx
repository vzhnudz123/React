import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Testcar = () => {

    const[data,setData]=useState([]);
    const[search,setsearch]=useState("")

    const cardata=async()=>{
        try{
            let response=await axios.get(`http://localhost:8000/carShowroom?search=${search}`);
            console.log(response);
            setData(response.data.cars)
            
        }
        catch(error){
            console.log(error);
            

        }

    }
    useEffect(()=>{
        cardata()

    },[])

    let handlesearch=(event)=>{
        setsearch(event.target.value);
    }
    let dataFilter = data.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(dataFilter);
    
  return (
    <div>
        <div>
            <input onChange={handlesearch} value={search} type="text" />
        </div>
        {dataFilter.map((car,index)=>(
            <div key={index}>
                <h3>{car.name}</h3>
               <h3>{car.details.price}</h3>

            </div>
        ))}

    </div>
  )
}
