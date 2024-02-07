import React from 'react'

import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImagesUrl = `/assets/heroes/${ id }.jpg`;


  return (
    <div className='col'>
        <div className="card">
            <div className='row no-gutters'>

                <div className="col-5">
                    <img src={heroImagesUrl} alt={superhero} className='card-img' />
                </div>

                <div className="col-7">
                    <div className="card-body">

                        <h5 className='card-title'>{superhero}</h5>

                        {

                            (characters !== alter_ego) ? <p className='card-text'>{characters}</p> : '' 

                        }
                        <p>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Mas...
                        </Link>
                        

                    </div>
                    
                    
                </div>

            </div>
        </div>

    </div>
  )
}
