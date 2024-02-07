import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

import {getCharacters} from '../../characters/data/getCharacters.js';

import './HomePage.css';
import { SampleCharacters } from '../components/SampleCharacters.jsx';

export const HomePage = () => {

    const [characters, setCharacters] = useState([]);



    useEffect( ()=>{
        
        getCharacters().then( (chac) => setCharacters( chac ));


    }, [ ]);


 

  return (
    <div>

        <div className='contenedor-presentacion'>

                <div className="title">
                    <h1 className='text-center fw-bold animate__animated animate__jackInTheBox' >Bienvenidos a MordyWeb</h1>
                </div>
        
        </div>

        <div className="home mt-2">
              
              <SampleCharacters characters={characters} />
          
        </div>


        <div className="footer d-flex justify-content-end flex-column align-items-end pe-3 mt-2">
          <a href="/">Docs</a>
          <a href="/">Api</a>
          <p className='text-light'>@Derechos de autor: AG2023</p>
        </div>

       


    </div>
  )
}
