import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

import {getCharacterByName} from '../../characters/data/getCharacterByName';

import {Card} from '../../characters/components/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

export const SearchPage = () => {

    

    const [characters, setCharacters] = useState([])

    const location = useLocation();
    
    const navigate = useNavigate();

    const {q = ''} = queryString.parse( location.search );
    
    const { valueInput, onInputChange, onResetForm} = useForm({
        valueInput: q
    })

    const onSubmit = (event)=>{

        event.preventDefault();

        // Obtener el botón que desencadenó el evento
        const submitterButton = event.nativeEvent.submitter;


        if (submitterButton && submitterButton.name === 'btn-search') 
        {
            navigate(`?q=${valueInput}`);
            
        }
        else if(submitterButton && submitterButton.name === 'btn-refresh')
        {
            onResetForm();
            console.log(valueInput);

            navigate(`/search`);
        }

    

    } 

    useEffect( ()=>{

        if (q.length > 0) {
            getCharacterByName(valueInput).then( (chac) => setCharacters(chac));
        }

        

    }, [ q ] )


    const Alert = ({characters, valueInput})=>{

        
        if (!characters) 
        {
            return <div className='alert alert-danger'>Not found character</div>
                    
        }
        else if(characters.length === 0 && valueInput.length === 0)
        {
            return <div className='alert alert-primary'>Search character!</div>
            
        }


    }

    

  return (
    <div className='container'>

        <div className="row">
            <div className="col-4">

                <h3 className='text-secondary-emphasis fs-2'>Search</h3>
                <hr />

                <form onSubmit={onSubmit}>
                    <input type="text" className='form-control' value={valueInput} onChange={onInputChange} name='valueInput'/>

                    <div className="cont-buttons">
                        <button type='submit' className='btn btn-outline-dark mt-2' name='btn-search'>Search</button>
                        <button type='submit' className='btn btn-outline-danger mt-2 ms-3' name='btn-refresh'>Refresh</button>

                    </div>
                </form>

            </div>

            <div className="col-8">
                
                <h3 className='fs-2' >Results</h3>

                <hr />

                <Alert characters={characters} valueInput={valueInput}/>

                

                
                
                <div className="row flex-column row-cols-1 g-5">

                    { (characters) ? characters.map( (chac) => <Card key={chac.id} {...chac} />) : console.log(characters)}
                    

                </div>
                
            </div>
        </div>

    </div>
  )
}
