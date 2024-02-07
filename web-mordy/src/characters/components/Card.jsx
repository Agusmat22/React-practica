import React from 'react'

import './Card.css';

import { NavLink, useNavigate } from 'react-router-dom';

export const Card = ({name,species,image,id}) => {


  return (
    <div className='col animate__animated animate__pulse carta-characters'>
        <div className="card">
            <div className="row">
                <div className="col-5">
                    <img className='card-img' src={image} alt={name} />
                </div>
                
                <div className="col-7">
                    <div className="card-body">
                        <h3 className="card-title fs-4">{name}</h3>
                        <p className='card-text' >{species}</p>
                        <NavLink to={`/character/${id}`} className={'verMas'}>...mas</NavLink>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
