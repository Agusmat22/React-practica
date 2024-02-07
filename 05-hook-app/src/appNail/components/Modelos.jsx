
import React from 'react'

import Modelo1 from '../img/model1.jpeg';
import Modelo2 from '../img/model2.jpeg';

import './Modelos.css'
import { Card } from './Card';

export const Modelos = () => {
  return (
    <div className='contenedor-modelos'>

        <h3>Modelos</h3>

        <div className="modelos">
            <Card img={Modelo2} title={'Ocean'} />
            <Card img={Modelo1} title={'BlueCherry'} />
            <Card img={Modelo2} title={'Ocean'} />
        </div>


    </div>
  )
}
