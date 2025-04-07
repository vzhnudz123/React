import React from 'react';
import { useSelector } from 'react-redux';

const Detailscar = () => {
  const selectedCar = useSelector(state => state.Car.selectedCar);

  if (!selectedCar) {
    return <div className="text-center text-xl font-semibold">No car selected</div>;
  }

  const { manufacturer, year, price, features, engine, horsepower, topSpeed, mileage, image } = selectedCar.details;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">

      {/* Top Section: Header & Car Info */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Car Image */}
        <div className="flex justify-center mb-6">
          <img
            src={selectedCar.image}
            alt={selectedCar.name}
            className="w-[450px] h-[350px] rounded-lg object-cover shadow-xl"
          />
        </div>

        {/* Car Name */}
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-6">{selectedCar.name}</h3>

        {/* Car Details Section */}
        <div className="space-y-4 text-gray-700">

          {/* Manufacturer, Year, and Price */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <p className="text-lg">
              <strong className="font-semibold">Manufacturer:</strong> {manufacturer}
            </p>
            <p className="text-lg">
              <strong className="font-semibold">Year:</strong> {year}
            </p>
            <p className="text-lg">
              <strong className="font-semibold">Price:</strong> {price}
            </p>
          </div>

          {/* Engine, Horsepower, Top Speed */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <p className="text-lg">
              <strong className="font-semibold">Engine:</strong> {engine}
            </p>
            <p className="text-lg">
              <strong className="font-semibold">Horsepower:</strong> {horsepower}
            </p>
            <p className="text-lg">
              <strong className="font-semibold">Top Speed:</strong> {topSpeed}
            </p>
          </div>

          {/* Mileage */}
          <p className="text-lg">
            <strong className="font-semibold">Mileage:</strong> {mileage}
          </p>

          {/* Features List */}
          <div>
            <strong className="font-semibold text-xl">Features:</strong>
            <ul className="list-inside space-y-2 mt-2">
              {features && features.map((feature, index) => (
                <li key={index} className="text-lg text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section (Optional) */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600">© 2025 Car Showroom. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Detailscar;
