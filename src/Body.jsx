import React from 'react'
import img from './me.png'

const Body = () => {
  return (
    <div className='mainb'>

        <div>
            <img className='img' src={img} alt=""/>
        </div>

        <div className='box'>
            <label htmlFor="">Enter name</label><br />
            <input type="text" /><br />
            <label htmlFor="">enter password</label><br />
            <input type="text" /><br />
            <button>submit</button>
        </div>
    </div>
  )
}

export default Body