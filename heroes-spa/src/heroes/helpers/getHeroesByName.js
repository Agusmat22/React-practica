
import {heroes} from '../data/heroes'

export const getHeroesByName = ( name ) => {

    if (name === '') return []; 

    return heroes.filter( (her) => her.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()) );
  
}
