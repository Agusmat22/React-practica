import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCharacterById } from '../data/getCharacterById';

export const SingleCharacterPage = () => {

  const {id} = useParams();

  const [character, setCharacter] = useState([])

  const navigate = useNavigate();



  useEffect( ()=>{

     getCharacterById(id).then( (chac) => setCharacter(chac) );

  }, [ id ] )

  const onNavigate = ()=>{

    navigate(-1);
  }


  return (

    <div className="container mt-5 animate__animated animate__bounceInLeft">
       <div className='row' style={{height: '20rem'}}>

          <div className='card'>

            <div className="row g-5">

              <div className="col-5">

                <img src={character.image} alt={character.name} style={{width: '100%', height: '100%'}}/>

              </div>

              <div className="col-7 pt-3">

                <h1 className="card-title">{character.name}</h1>
                <hr />
                <p className="card-text"><b>Status: </b> {character.status}</p>
                <p className="card-text"><b>Gender: </b> {character.gender}</p>
                <p className="card-text"><b>Species: </b> {character.species}</p>

                <button className='btn btn-outline-dark' onClick={onNavigate}>Back</button>

              </div>

            </div>

          </div>

        </div>

    </div>
   
  )
}
