

import React, { useEffect, useState } from 'react';

export const SimpleForm = () => {

  const [first, setFirst] = useState({
    username: "Agustin",
    email: "agusvacante@hotmail.com.ar",
  });

  const {username, email} = first;


  const onInputChange = ({target})=>{

    const {name, value} = target;

    setFirst({
      ...first,
      [ name ]: value
    })

  }



  return (
    <div>
      <h1>Simple form</h1>
      <hr />

      <input 
        type="username"
        className='form-control'
        name='username'
        placeholder='Username'
        value={username}
        onChange={onInputChange}
        
      />

      <input 
        type="email"
        className='form-control'
        name='email'
        placeholder='agustin@gmail.com'
        value={email}
        onChange={onInputChange}
        
      />
    </div>
  )
}
