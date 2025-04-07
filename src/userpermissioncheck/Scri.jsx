import React from 'react'
import Admin from './Admin';
import User from './User';
import Guest from './Guest';

const Scri = ({rols}) => {
   
  return (
    <div>
        {rols=='Admin' && <Admin></Admin>}
        {rols=='User' && <User></User>}
        {rols=='Guest' && <Guest></Guest>}
    </div>
  )
}

export default Scri