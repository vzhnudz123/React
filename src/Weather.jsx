import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';

const Weather = () => {
  const [data, setData] = useState([]);
  const [search, Setsearch] = useState('');

  let app = async (event) => {
    event.preventDefault();
    try {
      let info = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`);
      setData(info.data);
    } catch (error) {
      console.error(error);
      alert("City not found");
    }
  }

  const handlechange = (event) => {
    Setsearch(event.target.value);
  }

  return (
    <div className='main'>
      <div>
        <h2>WeatherApp</h2>
        <form className='formm' action="" onSubmit={app}>
          <input className='input' type="search" onChange={handlechange} />
          <button className='butt'>Search</button>
        </form>

        {data && data.main ? (
          <div>
            <h3>City: {data.name}</h3>
            <h3>Temperature: {data.main.temp} °F</h3>
            <h3>Humidity: {data.main.humidity} %</h3>
          </div>
        ) : (
          <h3></h3>
        )}
      </div>
    </div>
  );
}

export default Weather;
