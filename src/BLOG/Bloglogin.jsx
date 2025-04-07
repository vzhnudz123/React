import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Bloglogin = () => {


    const[data,setdata]=useState([]);
    const navigate=useNavigate();

    const handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }

    const handlesubmit=async(event)=>{
        event.preventDefault();
        try{
            let response=await axios.post("http://localhost:8000/blog/securedLogin",data)

            if(response.data && response.data._id){
                localStorage.setItem("id",response.data._id)
                localStorage.setItem("email",response.data.email)
                localStorage.setItem("token",response.data.token)
                toast.success("sucess")
                navigate('/blog')
            }

        }

        catch(error){
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
            } 
            
            
        }

    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handlesubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
          
            onChange={handlechange}
              type="email"
              name='email'
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
            onChange={handlechange}
            name='password'
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{' '}
          <a href="/blogregister" className="text-purple-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};
