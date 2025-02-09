import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from './amazon2.avif'
import img1 from './amazon1.jpeg'
import img2 from './amazon3.webp'
import { GrAmazon } from "react-icons/gr";
import { BsSearchHeartFill } from "react-icons/bs";
import pro from './item1.jpg'
import pro1 from './pro1.jpg'
import pro2 from './pro2.webp'
import pro4 from './pro4.jpg'
import ph from './166pro.jpg'
import ph1 from './15proo.jpg'
import ph2 from './144pro.jpg'
import ph3 from './ph6.webp'
import ph4 from './ph7.webp'





const Home = () => {
    const[toggle,setToggle]=useState(true);

    let togglecolor=()=>{
        setToggle(!toggle)
    }
    console.log(toggle);
  return (
    <div >
        <div className='d-flex justify-content-between bg-dark p-3 text-light'>
        <div>
       <h3 onClick={togglecolor} style={{color:toggle?'red':'white'}} className=' '><GrAmazon />-Amazon.in</h3>
        </div>
        <div className='search'>
        <div className='d-flex p-2'>
            <select className='rounded-start-3 border' name="" id="">
                <option value="">Alexa</option>
                <option value="">Electronics</option>
                <option value="">Mobiles</option>
                </select>
            <input type="text" className='border w-100'/>
            <button className='rounded-end-3 border'><BsSearchHeartFill /></button>        
            </div>

        </div>

    <div className='d-flex gap-3 '>
        
        <Link  to="/login" style={{ textDecoration: 'none' }}><h2 className='text-center text-light'>Login</h2></Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}><h2 className='text-center   text-light'>Order</h2></Link>
        </div>  
    </div>
    <Carousel className='h-6 p-2' autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={1000}>
                <div id='top' className=''>
                    <img src={img} className='w-25 h-25'   />
                    
                </div>
                <div>
                    <img src={img1} className='w-25 h-25' />
                </div>
                <div>
                    <img src={img2} className='w-25 h-25' />
                </div>

            </Carousel>
            <div>
                    <h1 className='fw-bold'>Continue shopping deals</h1>
                    <div className='w-25 d-flex gap-3'>
                        <img className='' src={pro} alt="" />

                        <img src={pro1} alt="" />
                        <img src={pro2} alt="" />
                        <img src={pro4} alt="" />

                    </div>
                    <h1 className='text-center fw-bold'>Mobiles</h1>

                    <div className='w-25 d-flex gap-5'style={{height:'300px'}}>

                        <img src={ph} alt="" />
                        <img src={ph1} alt="" />
                        <img src={ph2} alt="" />
                        <img src={ph3} alt="" />
                        <img src={ph4} alt="" />
                        

                    </div>

                </div>
    </div>
  )
}

export default Home