import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './router/home.jsx'
import { Tecnologias } from './router/tecnologias.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "tecnologias",
    element: <Tecnologias />
  },
  {
    path: "/",
    element: <Home />
  },
]

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
