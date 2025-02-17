import React from 'react'

const Text = () => {
    const[data,setdata]=Usestate=("");


    const handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }

    const submit=(event)=>{
        event.preventDefault()
        setdata(data);
        
    }
  return (
    <div>
        <form action="" onSubmit={submit}>
            <label htmlFor="">name</label>
            <input type="text" onChange={handlechange} name='name'/>
            <label htmlFor="">email</label>
            <input type="email" onChange={handlechange} />

        </form>
    </div>
  )
}

export default Text