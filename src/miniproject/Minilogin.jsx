import React from "react";

export const Minilogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-md flex-col p-6">
        
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          SIGN <span className="text-blue-500">IN</span>
        </h2>

        {/* Form */}
        <form className="flex flex-col space-y-4 mt-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="text-right">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600">
            SIGN IN
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 font-bold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
