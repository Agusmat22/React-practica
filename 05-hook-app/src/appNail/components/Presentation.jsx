
import React from 'react'

import unias1 from '../img/unias/unia-1.jpg';
import unias2 from '../img/unias/unia-2.jpg';
import unias3 from '../img/unias/unia-3.jpg';

import { Carrousel } from './Carrousel';

import './Presentacion.css';


export const Presentation = () => {
  return (

      <div>

        <Carrousel
            img1={unias1} img2={unias2} img3={unias3}
        >

            <div className="presentation">
                <div className="logo-presentacion"></div>
                <p className='titulo-presentacion'>Tu felicidad esta en tus manos</p>
            </div>

        </Carrousel>
        
      </div>
  )
}
