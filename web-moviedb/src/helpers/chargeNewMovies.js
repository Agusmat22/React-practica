import { mapperMovie } from "../mappers/mapperMovieImg";
import { fetchNewMovie } from "./fetchNewMovie"; 


/**
 * 
 * @param {CallableFunction} setMovies estado de las peliculas nuevas
 * @param {CallableFunction} setLoaded estado de la carga
 * 
 * @returns {Array} Movies mapeadas 
 */
export const ChargeMovies = (setNewMovies,setLoaded,page)=>{
    
    fetchNewMovie(page).then( mov =>{

        const moviesMap = mapperMovie(mov);
        setNewMovies(moviesMap);
        setLoaded(true);

    });

}