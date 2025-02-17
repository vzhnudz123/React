import React, { useState } from 'react';
import axios from 'axios';
import img from './weather.webp'; 
import './weatherapps.css'
import { FaCity } from "react-icons/fa6";
import { TbTemperatureSun } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import sun from './sun.png'
import cloud from './cloud1.png'
import cloud1 from './cloud2.png'

const Weatherapps = (event) => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');

    const app = async (event) => {
        event.preventDefault();
        try {
            const info = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`);
            setData(info.data);
            console.log(info.data);
        } catch (error) {
            console.error(error);
        }
    };

    const change = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className='main' style={{ backgroundImage: `url(${img})` ,backgroundSize: 'cover',height:'790px',
        backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center'}}>
                    <div className='cards'>
                    <h1 className='head'>Weatherapp</h1>
            <form action="" onSubmit={app}>
                <input className='searchbox' placeholder='Enter City Name' type="search" onChange={change} />
                <button className='butt'>Submit</button>
            </form>
            <div>
                
            </div>

            {data &&<h2 className='one'><FaCity className='text-dark' /> City:{data.name}</h2>}
            {data &&<h2 className='two'><TbTemperatureSun className='text-warning' /> temperature:{data?.main?.temp}°F</h2>}
            {data &&<h3 className='three'><WiHumidity className='text-info' /> Humidity:{data?.main?.humidity}%</h3>}
       

            </div>
            <img className='sun' src={sun} alt="" style={{width:'200px'}} />
            <img className='megam' src={cloud} alt="" style={{width:'500px', height:'200px'}} />
            <img className='megam1' src={cloud} alt="" style={{width:'200px',height:'200px'}}/>
        </div>
    );
}

export default Weatherapps;
