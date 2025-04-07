import React, { useEffect, useState } from 'react';
import { setSelectedCar } from './Carsslice';  // Correct import statement

// import './styles.css';
import axios from 'axios';
import { GrFavorite } from "react-icons/gr";
import { MdLocalGroceryStore } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtofav, removefav } from './Carsslice';  // Correct path
import { MdOutlineFavorite } from "react-icons/md";


const Carfront = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const favoriteCars = useSelector((state) => state.Car);
   // Access favorite cars from Redux store

  const fetchData = async () => {
    try {
      let response = await axios.get(`http://localhost:8000/carShowroom?search=${search}`);
      console.log(response);
      setData(response.data.cars);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const dataFilter = data.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToFavorite = (car) => {//nekkiya car evide vannu (car)
    dispatch(addtofav(car)); // Dispatch the add to favorite action
  };

  const handleViewDetails = (car) => {
    dispatch(setSelectedCar(car)); // Dispatch selected car to redux
  };

  // const handleRemoveFromFavorite = (car) => {
  //   dispatch(removefav(car)); // Dispatch the remove from favorite action
  // };

  return (
    <div>
      <div className="container">
        <div className="home text-center">
          <h1 className="mt-5">Welcome to Our Car Showroom</h1>
          <Link to="/Favpage" className='no-underline text-black hover:text-yellow-400'>
            <h3 className=' absolute ms-[1320px] top-8 font-bold text-5xl hover:text-red-600 '>
            <MdOutlineFavorite />
            </h3>
          </Link>
          <p>Find your dream car today!</p>

          <div className="search-bar">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search for a car model..."
              value={search}
            />
            <button className="w-40">Search</button>
          </div>
        </div>

        <div className="featured-cars">
          <h2 className="mt-4">Featured Cars</h2>
          <div className="car-cards mt-4 flex flex-wrap gap-5">
            {dataFilter.map((car, index) => (
              <div key={index} className="car-card">
                <img src={car.image} alt={car.name} className='w-[400px] h-[300px] hover:shadow-2xl hover:scale-105 transform transition-all p-6' />
                <h3 className='ms-4 mt-3'>{car.name}  
                  <h3 
                    onClick={() => handleAddToFavorite(car)} //car aan paass aavunnath car is item clicked item
                    className=' absolute ms-80 hover:text-red-600 hover:shadow-2xl hover:scale-150 transform transition-all'>
                    <GrFavorite />
                  </h3>
                </h3>
                <p className='ms-4'>{car.details.price}</p>
                <Link to='/cardetails' className='no-underline text-white'>
                <button onClick={()=>handleViewDetails(car)} className="ms-4 w-40 bg-green-500 hover:shadow-2xl hover:scale-105 transform transition-all">View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-80 bg-black text-white pt-3 pb-3 bottom-0 w-full">
        <h2 className=''>About Us</h2>
        <p>At Our Car Showroom, we offer the best selection of new and used cars. Our team is dedicated to helping you find the perfect vehicle at the right price.</p>
        <Link to='/contact'>
        <button className="w-40 bg-white text-black hover:shadow-2xl hover:scale-105 transform transition-all">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Carfront;
