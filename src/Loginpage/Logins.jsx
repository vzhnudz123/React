import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Logins = () => {
  const[data,setdata]=useState([]);
const navigate=useNavigate()
  const handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})

  }

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
        let response = await axios.post("http://localhost:8000/user/securedlogin", data);

        if (response.data && response.data._id) {
            localStorage.setItem("id", response.data._id);
            localStorage.setItem("email", response.data.email);
            localStorage.setItem('token',response.data.token);
            toast.success("Login Successful");
            navigate('/profile')
        }
    } catch (error) {

        if (error.response && error.response.data.message) {
            toast.error(error.response.data.message);
        } 
    }
};
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handlesubmit}  className="space-y-4">
        <Toaster />
          <div>
            <label  htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input onChange={handlechange} 
              type="email"
              id="email"
              name='email'
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>

            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input onChange={handlechange}
              type="password"
              id="password"
              name='password'
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Logins;
