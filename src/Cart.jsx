import React from 'react'
import './Cart.css'
import img1 from "./133pro.jpg" 
import img2 from "./144pro.jpg"
import img3 from "./15proo.jpg"
import img4 from "./166pro.jpg"
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
const Cart = () => {

    const product=[{image:img1,name:"iphone",model:"13pro",capacity:128,price:"$60k"},
    {image:img2,name:"iphone",model:"14pro",capacity:128,price:"$70k"},
    {image:img3,name:"iphone",model:"15pro",capacity:512,price:"$90k"},
    {image:img4,name:"iphone",model:"16pro",capacity:256,price:"$1,10k"}];

    const colors = ["white", "white", "white", "white"];
    const buyNowColors = ["#FF5733", "#33FF57", "#3357FF", "white"];

  return (
    <div className='main'>
        <div><h1 className='apple'>Apple Hub</h1></div>
    
    <div className='itm'>{product.map((item,index)=>(
        

        <div className='itms' key={index}
        style={{ backgroundColor: colors[index] }} >
            <h2>{item.name}</h2>
            <img className='image' src={item.image} alt=""  height={"200px"} width={"300px"}/>
            <h3>{item.model}</h3>
            <h3>{item.capacity}</h3>
            <h3>{item.price}</h3>
            <div className='col'><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
            <h3 className='buy'
            style={{ color: buyNowColors[index] }} >Buy Now</h3>

        </div>



    ))
        }

    </div>
    </div>
  )
}

export default Cart