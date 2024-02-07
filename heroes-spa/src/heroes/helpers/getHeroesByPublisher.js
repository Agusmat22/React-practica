
import {heroes} from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {


    

    const validPublisher = ['DC COMICS', 'MARVEL COMICS']
    if (!validPublisher.includes( publisher )){
        throw new Error('El publisher ingresado no existe')
    }


    return heroes.filter( (her) => her.publisher.toLocaleUpperCase() === publisher );
  
}
