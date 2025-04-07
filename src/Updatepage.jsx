import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Updatepage = () => {
    const { id } = useParams(); 
    console.log(id);
    

    const [update, setUpdate] = useState("");

    const fetchup = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/user/edit/${id}`);
            console.log("Fetched update data:", response.data); 
            setUpdate(response.data);  
        } catch (error) {
            console.log("Error fetching update data:", error);
        }
    }

    useEffect(() => {
        fetchup();
    }, []); 

    const handlechange=(event)=>{
        setUpdate({...update,[event.target.name]:event.target.value})
    }
    const handlesubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/user/update/${id}`, update);  // Use `${id}` for the dynamic ID
            console.log("Response from PUT request:", response.update);
        } catch (error) {
            console.log("Error updating user data:", error);
        }
    };
    




    return (
        <div>
            <form onSubmit={handlesubmit} action="">
            <input onChange={handlechange} className='bg-red-400' placeholder={update.name} type="text" name="name" />
            <button className='bg-green-500' type='submit'>edit</button>
            <h1>Update Page</h1>
            </form>
        </div>
    );
}

export default Updatepage;
