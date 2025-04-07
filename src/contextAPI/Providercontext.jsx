
import React, { Children, useState } from 'react'
import Themcontext from './Context';
import './Provider.css'

const Providercontext = ({children}) => {//thisn is provider

    const[theme,settheme]=useState("light");

    const toggletheme=()=>{
        settheme(theme=="light"? "dark":"light");
    }
  return (
    <div> 
        <Themcontext.Provider value={{theme,toggletheme}}> 
            {children}


        </Themcontext.Provider>
    </div>
  )
}

export default Providercontext