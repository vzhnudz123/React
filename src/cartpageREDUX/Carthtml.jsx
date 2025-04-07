import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Cartslice'; // Import the action

const Carthtml = () => {
    const [toggle, setToggle] = useState(true);
    const dispatch = useDispatch();

    const togglecolor = () => {
        setToggle(!toggle);
    };

    const handleBuyClick = (name, img) => {
        // Dispatch the addToCart action with product name and image
        dispatch(addToCart({ name, img }));
    };

    const cartpop=useSelector((state)=>state.cart.cart);





    return (
        <div>
            {/* Navigation Bar */}
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

                <div className='d-flex gap-3'>
                    <Link to="/Cart" style={{ textDecoration: 'none' }}>
                        <h2 className='text-light'>Login</h2>
                    </Link>
                    <Link to="/Cartpage" style={{ textDecoration: 'none' }}>
                        <h2 className='text-light'>cart:{cartpop.reduce((total,item)=>total+item.quantity,0)}</h2>
                    </Link>
                </div>
            </div>

            {/* Image Carousel */}
            <div className='carousel-container '>
                <Carousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={1000}>
                    <div>
                        <img src={img} className='carousel-img' alt="carousel-img-1" />
                    </div>
                    <div>
                        <img src={img1} className='carousel-img' alt="carousel-img-2" />
                    </div>
                    <div>
                        <img src={img2} className='carousel-img' alt="carousel-img-3" />
                    </div>
                </Carousel>
            </div>

            {/* Continue Shopping Deals Section */}
            <div className='shopping-deals'>
                <h1 className='fw-bold mt-4'>Continue shopping deals</h1>
                <Link to="/Cart">
                    <div className='d-flex gap-3 justify-content-center'>
                        <img src={pro} alt="" className='product-image' />
                        <img src={pro1} alt="" className='product-image' />
                        <img src={pro2} alt="" className='product-image' />
                        <img src={pro4} alt="" className='product-image' />
                    </div>
                </Link>
            </div>

            {/* Mobile Products Section */}
            <div className='mobile-products'>
                <h1 className='text-center fw-bold mt-5'>Mobiles</h1>
                <div className='d-flex flex-wrap justify-content-center gap-4'>
                    {/* Each Product */}
                    <div className="product-container">
                        <img className='product-img' src={ph} alt="phone-1 h-25" />
                        <button onClick={() => handleBuyClick('Phone 1', ph)} className="buy-button">Buy</button>
                    </div>

                    <div className="product-container">
                        <img className='product-img' src={ph1} alt="phone-2" />
                        <button onClick={() => handleBuyClick('Phone 2', ph1)} className="buy-button">Buy</button>
                    </div>

                    <div className="product-container">
                        <img className='product-img' src={ph2} alt="phone-3" />
                        <button onClick={() => handleBuyClick('Phone 3', ph2)} className="buy-button">Buy</button>
                    </div>

                    <div className="product-container">
                        <img className='product-img' src={ph3} alt="phone-4" />
                        <button onClick={() => handleBuyClick('Phone 4', ph3)} className="buy-button">Buy</button>
                    </div>

                    <div className="product-container">
                        <img className='product-img' src={ph4} alt="phone-5" />
                        <button onClick={() => handleBuyClick('Phone 5', ph4)} className="buy-button">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carthtml;
