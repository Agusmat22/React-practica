
import {heroes} from '../data/heroes'

export const getHeroesById = ( id ) => {


    return heroes.filter( (her) => her.id === id );
  
}
