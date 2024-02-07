import { NavLink } from 'react-router-dom'

import React from 'react'

import './Navbar.css'

export const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg">

            <div className="container-fluid">

                <NavLink className="navbar-brand" to="/"></NavLink>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">

                        <NavLink
                        className={ (props) => `nav-link ${ (props.isActive) ? 'active' : '' }`}
                        to="/"
                        >
                            Inicio
                        </NavLink>

                        <NavLink
                        className={ (props) => `nav-link ${ (props.isActive) ? 'active' : '' }`}
                        to="/trabajos"
                        >
                            Trabajos
                        </NavLink>

                        <NavLink
                        className={ (props) => `nav-link ${ (props.isActive) ? 'active' : '' }`}
                        to="/modelos"
                        >
                            Modelos
                        </NavLink>


                    </ul>
                </div>
            </div>
        </nav>
  )
}
