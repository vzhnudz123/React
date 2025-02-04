import React from 'react'

const Obj = () => {
    const object=[{name:"vishnu",age:22,lastname:"r"}];
    console.log(object);
    


  return (

        <div>{
            object.map((item,index)=>(
                <div>
                <h2>{item.name}</h2>
                <h2>{item.age}</h2>
                <h2></h2>
                </div>
            
            ))

            }

    </div>
  )
}

export default Obj