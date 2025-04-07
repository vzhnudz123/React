import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import the necessary hooks
import { decrement, increment } from './Counterslice'; // Import the actions

const Reduxt = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const count = useSelector((state) => state.counter.count); // Access the count value from the Redux store

  return (
    <div className="flex flex-col items-center">
      <h4 className="mb-4">Current Count: {count}</h4> {/* Display the count value */}

      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())} // Dispatch increment action
          className="bg-red-500 text-white p-2 rounded"
        >
          +
        </button>
        
        <button
          onClick={() => dispatch(decrement())} // Dispatch decrement action
          className="bg-yellow-300 text-white p-2 rounded"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Reduxt;
