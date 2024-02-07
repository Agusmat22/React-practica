import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Card } from '../components/Card';
import { getCharacters } from '../data/getCharacters';


export const CharactersPage = () => {

    const [characters, setCharacters] = useState([]);


    useEffect( ()=>{
        
        getCharacters().then( (chac) => setCharacters( chac ));
    }, [ ]);



  return (
    <div>

        <div className='container mt-5 mb-5'>

        
           <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                
                    characters.map( (chac) => (
                        <Card key={chac.id} {...chac} />
                    ) )
                }
            </div >

        </div>

       


    </div>
  )
}