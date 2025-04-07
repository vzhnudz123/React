import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Blogregister = () => {

    const[data,setdata]=useState({})

    const handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value});
    }

    const submit=async(event)=>{
        event.preventDefault();
        try{
            let response=await axios.post("http://localhost:8000/blog/securedupload",data)
            console.log(response);
            toast.success("user added")
            

        }
        catch(error){
            console.log(error);
            toast.error("user not added")
            
        }
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Create an Account
        </h2>

        <form onSubmit={submit} className="space-y-4">
        <Toaster />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
             onChange={handlechange}
              type="text"
              name='name'
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
            onChange={handlechange}
              type="email"
              name='email'
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
            onChange={handlechange}
              type="password"
              name='password'
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <a href="/bloglogin" className="text-blue-600 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Blogregister;
