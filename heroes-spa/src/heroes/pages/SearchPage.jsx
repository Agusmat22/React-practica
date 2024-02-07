import React, { useMemo } from 'react'

import {useForm} from '../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'

import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'

import {HeroCard} from '../components'

export const SearchPage = () => {

  

  const navigate = useNavigate();

  const location = useLocation(); //obtiene la location que me encuentro

  const {q = ''} = queryString.parse( location.search );

  const {searchText, onInputChange, onResetForm} = useForm({
    searchText: q 
  })




  const onSearchSubmit = (event)=>{

    event.preventDefault();

    console.log(searchText)

    navigate(`?q=${searchText}`);

  }


  const heroe = useMemo( ()=>{

    const her = getHeroesByName(q);
    return her;
  }, [ q ] )

  console.log(heroe)


  return (
    <div className='container'>
      <h3 className='fs-1'>Search</h3>
      <hr />

      <div className="row">
        <div className="col-5">

          <h5 className='fs-4'>Searching</h5>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              className='form-control' 
              placeholder='Search a hero' 
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
              />

            <button
              className='btn btn-outline-primary mt-2'
            >
              Search
            </button>

          </form>

          

        </div>

        <div className="col-7">

          <h5 className='fs-4'>Results</h5>
          <hr />    

          <div className="alert alert-primary" style={{display: q === '' ? '' : 'none'}}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{display: (q.length > 0 && heroe.length === 0) ? '' : 'none'}}>
            No hero with <q>{q}</q>
          </div>

          {

            heroe.map( (her)=>(
              <HeroCard 
                key={her.id}
                {...her}   
              />
            ) )
            
          }

        </div>
      </div>
    </div>
  )
}
