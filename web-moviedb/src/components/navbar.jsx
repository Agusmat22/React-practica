import '../styles/navbar.css';
import logo from '../img/logo.png'
import { useEffect, useState } from 'react';


export const Navbar = ({openNavbar,setSection})=>{

    const [navbarVisible,setNavbar] = useState(true)

    const toggleNavbar = ()=>{

        setNavbar(!navbarVisible);
        openNavbar(!navbarVisible);

    }

    useEffect(() => {

        const handleResize = () => {
            // Actualiza el estado de la barra de navegación según el ancho de la pantalla
            if (window.innerWidth <= 768) 
            {
              setNavbar(false);
            } else {
              setNavbar(true);
            }
          };


          window.addEventListener('resize',handleResize);

          handleResize();



          

    }, [ ])

    const handleNavbar = (event)=>{

        setSection(event.target.id);
      }

    

    return(

        <div id="header">

            <img className="logo" src={logo} alt="logo" />

            <i onClick={ event => toggleNavbar(event) } className="bi bi-filter"></i>


            { navbarVisible && (

                <nav className="navbar">
                    <ul className="ul-navbar">
                        <li><a id='menu' className='item' href="#" onClick={ handleNavbar} >Menu</a></li>
                        <li><a id='peliculas' className='item' href="#" onClick={ handleNavbar} >Peliculas</a></li>
                        <li><a id='series' className='item' href="#" onClick={ handleNavbar} >Series</a></li>
                    </ul>
                </nav>
            )}

            

        </div>

    )
}