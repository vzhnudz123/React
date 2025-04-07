import React, { useState } from 'react';

// Dummy contact data
const showroomData = {
  name: 'vZ Car Showroom',
  address: '123 Car St, Auto City, CA 90210',
  phone: '+1 (123) 456-7890',
  email: 'contact@vZshowroom.com',
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
};

const ContactCar = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    alert('Your message has been sent!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">{showroomData.name}</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Showroom Information</h2>
        <p className="text-lg"><strong>Address:</strong> {showroomData.address}</p>
        <p className="text-lg"><strong>Phone:</strong> <a href={`tel:${showroomData.phone}`} className="text-blue-500">{showroomData.phone}</a></p>
        <p className="text-lg"><strong>Email:</strong> <a href={`mailto:${showroomData.email}`} className="text-blue-500">{showroomData.email}</a></p>
        <p className="text-lg"><strong>Working Hours:</strong> {showroomData.workingHours}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
        <div className="mb-4">
      


        </div>
      </div>
    </div>
  );
};

export default ContactCar;
