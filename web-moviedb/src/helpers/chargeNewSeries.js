import { mapperMovie } from "../mappers/mapperMovieImg";
import { fetchNewSeries } from "./fetchNewSeries"; 


/**
 * 
 * @param {CallableFunction} setMovies estado de las peliculas nuevas
 * @param {CallableFunction} setLoaded estado de la carga
 * 
 * @returns {Array} Movies mapeadas 
 */
export const ChargeSeries = (setNewSeries,setLoaded,page)=>{
    
    fetchNewSeries(page).then( mov =>{

        const moviesMap = mapperMovie(mov);
        setNewSeries(moviesMap);
        setLoaded(true);

    });

}