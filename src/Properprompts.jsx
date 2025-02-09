import React, { useEffect, useState } from 'react';
import './Properprompts.css';
import img from './hhh.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import backImage from './back.jpg'; // Import the background image from the src folder
import cutback from './sky.jpg'


const Properprompts = () => {
  const [showProper, setShowProper] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);
  const [bgImage, setBgImage] = useState(''); // State to control the background image
  const [showDragon, setShowDragon] = useState(false); // State to control the dragon image visibility
  const [navi,setnavi]=useState(false);


  useEffect(() => {
    // Step 1: Show "PROPER" text after 1 second
    const timer1 = setTimeout(() => {
      setShowProper(true); // Show "PROPER"
    }, 1000);
    
    // Step 2: Show "PROMPTS" text after 2 seconds
    const timer2 = setTimeout(() => {
      setShowPrompts(true); // Show "PROMPTS"
    }, 1000);

    // Step 3: Change background image after 3 seconds
    const timer3 = setTimeout(() => {
      setBgImage(`url(${backImage})`);  // Set background image
    }, 2500);

    // Step 4: Show dragon image after 4 seconds
    const timer4 = setTimeout(() => {
      setShowDragon(true); // Show dragon image
    }, 3000);

    const timer5=setTimeout(()=>{
      setnavi(true);

    },1800);



    // Clean up timers on unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      
    };
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  return (
    <div>
    <div 
      className="main" 
      style={{ backgroundImage: bgImage, backgroundSize: 'cover',height: '1050px',
        backgroundPosition: 'center' }}
    >
      {navi &&<div className="d-flex justify-content-between">
        <div className="text-danger ps-2"><h2>PP.</h2></div>
        <div className="text-light bg-danger">
          <h1 className="get">GET ACCESS <h3 className="to">TO PROMPT BUILDER</h3></h1>
        </div>
        <div className="text-danger">
          <h2 className="fw-bold fs-3 pe-2">ACCOUNT <h3 className="sign">SIGN/UP</h3></h2>
        </div>
      </div>}

      <div className="con">
        {showProper && <h1 className="content">PROPER</h1>}
        {showPrompts && <h1 className="content2">PROMPTS</h1>}
      </div>

      {showDragon && (
        <div className="v">
          <img data-aos="fade-up" className="dragon" src={img} alt="Dragon" />
        </div>
      )};
    </div>
    <div>
      <img className='cutimg' src={cutback} alt="" />
      </div>


      <div className='text-center'>
        <h2>YOUR COPY AND PASTE</h2>
          <h2>GENERATIVE AI PROMPT BUILDER</h2>
          <h2>to CONCEPTUALISE FASTER AND</h2>
          <h2>CRAETE BETTER PHOTOGRAPHY.</h2>

      </div>
    </div>
  );
};

export default Properprompts;
