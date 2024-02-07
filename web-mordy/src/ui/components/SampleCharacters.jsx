import React from 'react'
import { Card } from '../../characters/components/Card.jsx';
import { useNavigate } from 'react-router-dom';


export const SampleCharacters = ({characters}) => {

    const navigate = useNavigate();


    const onNavigate = ()=>{

        navigate('/characters');
    }

    return (
        <>

                <div className="personajes text-center mt-5">
                    <h3>Algunos personajes</h3>
                </div>

                <div className="contenedor-personajes  mt-5">

                    <div className="container contenedor-card row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 pt-5">
                    {

                        characters.map( (chac,index)=>{

                        if (index > 2) {
                            return;
                        }

                        return <Card key={chac.id} {...chac} />

                        } )
                    }

                    </div>
                    

                    <div className="contenedor-boton text-center mt-5">
                    <button className='btn btn-outline-light' onClick={onNavigate}>Ver mas..</button>
                    </div>
                </div>

        </>
    )
}
