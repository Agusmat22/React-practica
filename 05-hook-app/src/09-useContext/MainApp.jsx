
import { Route, Routes } from 'react-router-dom'
import {HomePage} from '../09-useContext/HomePage.jsx'
import {AboutPage} from '../09-useContext/AboutPage.jsx'
import {LoginPage} from '../09-useContext/LoginPage.jsx'


import React from 'react'
import { Navbar } from './Navbar.jsx'
import { UserProvider } from './context/UserProvider.jsx'

export const MainApp = () => {
  return (
    <UserProvider>

        <h1>MainApp</h1>
            <Navbar />
        <hr />

        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='about' element={<AboutPage />}></Route>
            <Route path='login' element={<LoginPage />}></Route>
        </Routes>

    </UserProvider>
  )
}
