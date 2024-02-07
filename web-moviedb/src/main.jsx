import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';  // Importa las Bootstrap Icons
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MovieApp } from './movieApp'

import { useState } from 'react';
import { ChargeMovies } from './helpers/chargeMovies';


import { createBrowserRouter, RouterProvider } from "react-router-dom";




const routes = [
  {
    path: "/",
    element: < MovieApp />,
    
  }
  

]


const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
