import React from 'react';
import Child from './Child';
import './Parent.css';
import image from './144pro.jpg';
import image1 from './166pro.jpg';
import image2 from './155pro.jpg';




const Parent = () => {
  return (
    <div>

    <div className='a'>
   
      <Child image={image} name="Adam Jonson"></Child>
      <Child image={image1} name="linda larson"></Child>
      <Child image={image2} name="marry hudson"></Child>

 
    </div>

    <div className='a'>
    <Child image={image} name="nina Hudson"></Child>
      <Child image={image1} name="margo larson"></Child>
      <Child image={image2} name="nicolo scavo"></Child>
    </div>
    </div>
  );
};

export default Parent;
