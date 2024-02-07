import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    //este hook sabe en que pagina estamos
    const navigate = useNavigate() //esto es un custom Hook de router dom

   
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                MordyWeb
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ (isActive) ? 'active' : '' }`}
                        to="/characters"
                    >
                        Characters
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ (isActive) ? 'active' : '' }`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            
        </nav>
    )
}