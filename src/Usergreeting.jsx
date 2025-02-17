import React from 'react'

const Usergreeting = (props) => {
    const sign=[<h2>welcome:{props.username}</h2>];
    const signout=[<h2>please loged in</h2>];

    return(props.isloggedin ? sign :signout)

  
};

export default Usergreeting



