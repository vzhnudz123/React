import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from './amazon2.avif';
import img1 from './amazon1.jpeg';
import img2 from './amazon3.webp';
import { GrAmazon } from "react-icons/gr";
import { BsSearchHeartFill } from "react-icons/bs";
import pro from './item1.jpg';
import pro1 from './pro1.jpg';
import pro2 from './pro2.webp';
import pro4 from './pro4.jpg';
import ph from './166pro.jpg';
import ph1 from './15proo.jpg';
import ph2 from './144pro.jpg';
import ph3 from './ph6.webp';
import ph4 from './ph7.webp';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {


    const [toggle, setToggle] = useState(true);

    const togglecolor = () => {
        setToggle(!toggle);
    }

    console.log(toggle);

    return (
        <div>
            <div className='nb d-flex justify-content-between bg-dark p-3 text-light'>
                <div>
                    <h3 onClick={togglecolor} style={{ color: toggle ? 'red' : 'white' }} className=''>
                        <GrAmazon />-Amazon.in
                    </h3>
                </div>
                <div className='search'>
                    <div className='d-flex p-2'>
                        <select className='rounded-start-3 border' name="" id="">
                            <option value="">Alexa</option>
                            <option value="">Electronics</option>
                            <option value="">Mobiles</option>
                        </select>
                        <input type="text" className='border w-100' />
                        <button className='rounded-end-3 border'>
                            <BsSearchHeartFill />
                        </button>
                    </div>
                </div>

                <div className='d-flex gap-3 '>
                    <Link to="/Cart" style={{ textDecoration: 'none' }}>
                        <h2 className=' text-light'>Login</h2>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <h2 className=' text-light'>Cart</h2>
                    </Link>
                </div>
            </div>

            <div>
                <Carousel className='h-6 p-2' autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={1000}>
                    <div className=''>
                        <img src={img} className='w-25 h-25' />
                    </div>
                    <div>
                        <img src={img1} className='w-25 h-25' />
                    </div>
                    <div>
                        <img src={img2} className='w-25 h-25' />
                    </div>
                </Carousel>
            </div>

            <div>
                <h1 className='fw-bold mt-20'>Continue shopping deals</h1>
                <Link to="/Cart">
                    <div className='w-25 d-flex gap-3'>
                        <img className='' src={pro} alt="" />
                        <img src={pro1} alt="" />
                        <img src={pro2} alt="" />
                        <img src={pro4} alt="" />
                    </div>
                </Link>

                <h1 className='text-center fw-bold'>Mobiles</h1>

                {/* Now, each image is wrapped with its button below */}
                <div className=' d-flex gap-5' >
                    <div className="product-container">
                        <img className='ps' src={ph} alt="" />
                        <button className="buy-button">Buy</button>
                    </div>

                    <div className="product-container">
                        <img className='ps' src={ph1} alt="" />
                        <button className="buy-button">Buy</button>
                    </div>

                    <div className="product-container">
                        <img className='ps' src={ph2} alt="" />
                        <button className="buy-button">Buy</button>
                    </div>

                    <div className="product-container">
                        <img className='ps' src={ph3} alt="" />
                        <button className="buy-button">Buy</button>
                    </div>

                    <div className="product-container">
                        <img className='ps' src={ph4} alt="" />
                        <button className="buy-button">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
