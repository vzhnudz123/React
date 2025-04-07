import React, { useContext } from 'react'
import Themcontext from './Context';

const Consumer = () => {
    const getting=useContext(Themcontext);//context name


  return (
    <div className={getting.theme=="light" ? "dark":"light"}>


        <button className='bg-red-600' onClick={getting.toggletheme}>click</button>
<h1>dfghj</h1>


    </div>
  )
}

export default Consumer