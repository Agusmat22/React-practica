import { Card } from "./card"
import '../styles/cartelera.css';
import { Paginacion } from "./paginacion";

/**
 * 
 * @param {Array} movies 
 * @param {CallableFunction} callback 
 * @returns 
 */
export const Cartelera = ({movies, despliegue,title,pagination,loading})=>{

    let classContenedor; 

    (despliegue) ? classContenedor = `contenedor-cartelera ` + 'cartelera-margin'
                 : classContenedor = `contenedor-cartelera`

    return(

        <div className={classContenedor}>

            <h3 className="titulo">{title}</h3>


            <div className="cartelera">

            {movies.map( (mov) => (

                < Card 

                    title={mov.title}
                    vote_average={mov.vote_average}
                    poster_path={mov.poster_path}
                    key={mov.poster_path}
                
                />

            ))}

            </div>

            {
                (pagination && loading) ? <Paginacion pagination={pagination} loaded={loading}/>
                                        : null
            }
            

        </div>

        

    )

}