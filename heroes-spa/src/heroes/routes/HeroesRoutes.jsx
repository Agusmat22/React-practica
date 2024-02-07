import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'

import {MarvelPage, DcPage, SearchPage, HeroPage} from '../pages'

import {Navbar} from '../../ui'


export const HeroesRoutes = () => {
  return ( 
    <>

        <Navbar />


        <Routes>
            <Route path='marvel' element={<MarvelPage />}/>
            <Route path='dc' element={<DcPage />}/>


            {/*SEARCH Y HEROBYID */}
            <Route path='search' element={<SearchPage />}/>
            <Route path='hero/:heroId' element={<HeroPage />}/>
            


            <Route path='/' element={<Navigate to={'/marvel'} />}/>
        </Routes>

    </>
  )
}
