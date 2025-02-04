import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from './166pro.jpg'
import img1 from './133pro.jpg'
import img2 from './155pro.jpg'

const Home = () => {
  return (
    <div>
        <h1 className='text-light bg-dark'>Amazon-Mini</h1>
    <div className='d-flex justify-content-between '>
        
        <Link  to="/about" style={{ textDecoration: 'none' }}><h2 className='text-center d-flex text-dark'>About</h2></Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}><h2 className='text-center d-flex text-dark '>contact</h2></Link>
        
    </div>
    <Carousel className='h-6 ' autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={1000}>
                <div id='top'>
                    <img src={img} className='w-25 h-25'   />

                </div>
                <div>
                    <img src={img1} className='w-25 h-25' />

                </div>
                <div>
                    <img src={img2} className='w-25 h-25' />

                </div>

            </Carousel>
    </div>
  )
}

export default Home