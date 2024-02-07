
import React from 'react'

import './Home.css'
import { Navbar } from '../components/Navbar'
import { Presentation } from '../components/Presentation'
import { Modelos } from '../components/Modelos'
import { Separador } from '../components/Separador'

export const Home = () => {
  return (
    <div className='contenedor-home'>

        <Presentation />

        <Separador />

        <Modelos />

        <Separador />


    </div>
  )
}
