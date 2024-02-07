import { Link } from "react-router-dom"
import './menu.css';
import vehicles from "../data/vehicles";

export const Menu = ()=>{

    return(

        <div className="contenedor-menu">
            <nav className="nav">
                <ul className="ul">
                    <li> <Link to={'/'} className="link">Home</Link> </li>
                    <li> <Link to={'/vehicles'} className="link">Vehicles</Link> </li>
                    <li> <Link to={'/contact'} className="link">Contacto</Link> </li>
                </ul>
            </nav>
        </div>

    )
}