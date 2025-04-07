import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Backendtest = () => {
    const [data, setData] = useState([]);

   

    const fetchData = async () => {
        try {
            let response = await axios.get("http://localhost:8000/user/view");
            console.log("Fetched data:", response.data);  // Log the response to inspect the data
            setData(response.data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (id) => {
        console.log("Edit item with id:", id);  // Log the id being passed

    };

    return (
        <div>
            {data.map((item) => (
                <div key={item._id}>
                    <h3>{item.name}</h3>
                    <h3>{item.description}</h3>

                    <Link to={`/update/${item._id}`}>
                        <button onClick={() => handleEdit(item._id)}>Edit</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Backendtest;
