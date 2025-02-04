import React from 'react';
import './Parent.css';
const Child = (props) => {
  return (
    <div className='b'>
      
      <img className='imgs' src={props.image} alt={props.image} style={{width: '200px', height: '200px' }}/>
      <h3>{props.name}</h3>


    </div>

  );
};

export default Child;
