import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removefav } from './Carsslice';

const Favpage = () => {
  const dispatch = useDispatch();

  const handleRemoveFromFavorite = (car) => {
    dispatch(removefav(car));
  };

  // Access the correct state structure
  const favoriteCars = useSelector((state) => state.Car.car);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Favorite Cars</h1>

      <div className="max-w-6xl mx-auto px-4">
        {favoriteCars.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No favorite cars added yet!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {favoriteCars.map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                  <p className="text-md text-gray-600 mt-2">{car.details.price}</p>
                  <button
                    onClick={() => handleRemoveFromFavorite(car)}
                    className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favpage;
