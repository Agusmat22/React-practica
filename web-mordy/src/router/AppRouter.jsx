import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../ui/components/Navbar'
import { RouterProvider } from 'react-router-dom'
import { CharactersRoutes } from '../characters/routes/CharactersRoutes'
import { HomePage } from '../ui/pages/HomePage'
import { SearchPage } from '../ui/pages/SearchPage'



export const AppRouter = () => {
  return (
    <>

        <Navbar />

        <Routes>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='/*' element={<CharactersRoutes />}/>

            <Route path='search' element={<SearchPage />}/>
        </Routes>
    
    
    </>
  )
}
