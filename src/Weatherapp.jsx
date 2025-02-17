import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weatherapp = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const api = "https://api.openweathermap.org/data/2.5/weather?q=kozhikode&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3";

      try {
        const response = await axios.get(api);
        setData(response.data); 
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    getData(); 
  }, []); 

  return (
    <div className='bg-primary w-25 ms-5'>
      <h1>Temperature App</h1>
      
      {data.name && <h2>{data.name}</h2>}

      {data.main && <h2>Temperature: {data.main.temp}°F</h2>}

      {data.main && <h2>Humidity: {data.main.humidity}%</h2>}
    </div>
  );
};

export default Weatherapp;
