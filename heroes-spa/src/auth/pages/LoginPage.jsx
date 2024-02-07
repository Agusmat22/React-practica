import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';

export const LoginPage = () => {

  const navigate = useNavigate();

  const {user,logged , login, logout  } = useContext( AuthContext );

  console.log(user)

  const onLogin = ()=>{

    login('Agustin Garcia');

    navigate('/marvel',{
      replace: true
    })
  }


  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr />

        <button 
          className='btn btn-primary'
          onClick={ onLogin}
        >Login</button>
    </div>
  )
}
