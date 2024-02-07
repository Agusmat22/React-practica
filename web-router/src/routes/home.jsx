import { CarteleraVehiculos } from "../components/carteleraVehiculos"
import { Menu } from "../components/menu"

import './home.css'

/**
 * 
 * @param {Array} vehiculos 
 * @returns 
 */
export const Home = ({vehiculos})=>{

    return (
        <div className="home">

            <Menu /> {/*navbar*/}

            <div className="presentacion">
                <h1>Vehiculos en cartelera</h1>
                <p>Aqui usted podra visualizar los vehiculos del mercado</p>
            </div>

            <CarteleraVehiculos vehiculos={vehiculos} />


        </div>
    )
}