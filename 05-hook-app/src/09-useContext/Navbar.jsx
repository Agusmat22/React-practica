import { Link, NavLink } from 'react-router-dom'


import React from 'react'

export const Navbar = () => {
  return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContent</Link>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <NavLink
                            className={ (props) =>`nav-link ${props.isActive ? 'active': ''}`}
                            to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={ (props) =>`nav-link ${props.isActive ? 'active': ''}`}
                            to="/about"
                        >
                            About
                        </NavLink>

                        <NavLink
                            className={ (props) =>`nav-link ${props.isActive ? 'active': ''}`}
                            to="/login"
                        >
                            Login
                        </NavLink>

                    </ul>
                </div>
    </div>
    </nav>
    
    
  )
}



        //<Link to="/" >Home</Link>
        //<Link to="/about">About</Link>
        //<Link to="/login">Login</Link>       
   
