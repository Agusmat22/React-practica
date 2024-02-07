import React, { useMemo, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'
import {getHeroesById} from '../helpers/getHeroesById'

export const HeroPage = () => {

  const params = useParams();

  const navigate = useNavigate();

  const heroe = useMemo( ()=>{

    const heroe = getHeroesById(params.heroId);
    return heroe[0];

  }, [ params.heroId])

  const heroImagesUrl = `/assets/heroes/${ heroe.id }.jpg`;

  const onReturn = ()=>{
    navigate(-1);
  }

  return (
    <div className='container mt-5'>
      <div className="row">

        <div className="col">

          <div className="card">
            <div className="row">

              <div className="col-4">
                  <img className='card-img' src={heroImagesUrl} alt="foto" />
              </div>

              <div className="col-8">

                <div className="card-body">

                  <h3 className='card-title fs-1'>{heroe.superhero}</h3>

                  <ul className='list-group list-group-flush'>

                    <li className='list-group-item'> <b>Alter ego: </b>{heroe.alter_ego} </li>
                    <li className='list-group-item'> <b>Publisher: </b>{heroe.publisher} </li>
                    <li className='list-group-item'> <b>First first_appearance: </b>{heroe.first_appearance} </li>
               
                  </ul>

                  {

                    (heroe.characters !== heroe.alter_ego) ? <p className='card-text'>{heroe.characters}</p> : '' 

                  }

                  <h5 className='mt-3'> Characters </h5>
                  <p>{heroe.characters}</p>

                  <button
                    className='btn btn-outline-primary'
                    onClick={onReturn}
                  >
                    Return
                  </button>

                </div>

              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
