import { useState } from "react"
import { ChargeMovies } from "../helpers/chargeNewMovies";
import { Cartelera } from "./cartelera";

import '../styles/menu.css';
import { ChargeSeries } from "../helpers/chargeNewSeries";

export const Menu = ({despliegue,series,movies})=>{

    const[ newMovies, setNewMovies] = useState([]);
    const[ newSeries, setNewSeries] = useState([]);
    const[ loadedMovie, setLoadedMovie] = useState(false);
    const[ loadedSeries, setLoadedSeries] = useState(false);

      
    return(

        <div className="contenedor-menu">
            
            <div className="peliculas-populares">
                <Cartelera 

                    movies={ movies.slice(0,7) }
                    despliegue={ despliegue }
                    title={'Peliculas populares'}

                />
            </div>
            

            <div className="series-populares">  {/*TENGO QUE COLOCAR SERIES YA QUE HAY SOLO PELIS */}

                <Cartelera 

                    movies={ series.slice(0,7) }
                    despliegue={ despliegue }
                    title={'Series populares'}

                />

            </div>

        </div>
    )
}