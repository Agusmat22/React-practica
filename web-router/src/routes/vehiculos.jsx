import { Menu } from "../components/menu"
import { CarteleraVehiculos } from "../components/carteleraVehiculos"

import './vehiculos.css'

/**
 * 
 * @param {Array} vehiculos 
 * @returns 
 */
export const Vehiculos = ({vehiculos})=>{

    return (
        <div className="home">

            <Menu /> {/*navbar*/}

            <div className="presentacion">
                <h1>Vehiculos</h1>
                <p>Al mejor precio, exclusivo para usted</p>
            </div>


            <CarteleraVehiculos vehiculos={vehiculos} />




        </div>
    )
}