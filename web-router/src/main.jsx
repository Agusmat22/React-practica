import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import vehicles from './data/vehicles.js';
import { Menu } from './components/menu.jsx';
import { Home } from './routes/home.jsx';
import { Vehiculos } from './routes/vehiculos.jsx';
import { Contacto } from './routes/contacto.jsx';


const routes = [
  {
    path: "/",
    element: <Home vehiculos={vehicles} />,
    
  },
  {
    path: "vehicles",
    element: < Vehiculos vehiculos={vehicles}/>,

  },
  {
    path: "contact",
    element: < Contacto />,

  },
];

const router = createBrowserRouter(routes);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
