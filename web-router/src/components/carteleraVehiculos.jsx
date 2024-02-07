
import './carteleraVehiculos.css';

/**
 * 
 * @param {Arr} param0 
 * @returns 
 */
export const CarteleraVehiculos = ({vehiculos}) => {
  
  if (vehiculos) 
  {

    return (

      <div className="contenedor-vehiculos">
  
        {vehiculos.map( (veh) =>{
            return(
                <div key={veh.id} className="vehiculo">
                    <h2>{veh.name}</h2>
                    <p>{veh.description}</p>
                </div>
            )
        })}
        
      </div>
    )
    
  }
  else{
    //debo lanzar una excepcion
  }
  
  
}
