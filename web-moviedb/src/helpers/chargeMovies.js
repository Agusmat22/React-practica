import { mapperMovie } from "../mappers/mapperMovieImg";
import { fetchMovie } from "./fetchMovieApi";


/**
 * 
 * @param {CallableFunction} setMovies estado de las peliculas
 * @param {CallableFunction} setLoaded estado de la carga
 * 
 * @returns {Array} Movies mapeadas 
 */
export const ChargeMovies = (setMovies,setLoaded,page)=>{
    
    fetchMovie(page).then( mov =>{

        const moviesMap = mapperMovie(mov);
        setMovies(moviesMap);
        setLoaded(true);

    });

}