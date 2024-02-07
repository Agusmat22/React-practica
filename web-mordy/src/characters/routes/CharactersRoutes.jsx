import React from 'react'
import { Routes,Route } from 'react-router-dom'

import {CharactersPage} from '../pages/CharactersPage'

import {SingleCharacterPage} from '../pages/SingleCharacterPage'

export const CharactersRoutes = () => {
  return (
    <>

        <Routes>
            <Route path='characters' element={<CharactersPage />} />
            <Route path='character/:id' element={<SingleCharacterPage />} />
        </Routes>
    </>
  )
}
