import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp.js';
import heroes from '../../src/data/heroes.js';

describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHeroeById debe reteronar un heroe por ID', () => { 
        
        const id = 1;

        const hero = getHeroeById(id);

        expect( hero ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'} );

     });



    test('getHeroeById debe reteronar inexistente al no encontrar un heroe', () => { 
    
        const id = 100;

        const hero = getHeroeById(id);

        expect( hero).toBeFalsy;  //espero un undefined

    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 

        const owner = 'DC'

        const heroesDc = getHeroesByOwner(owner);

        expect( heroesDc ).toHaveLength(3); //tiene un largo de 3 elementos
        expect( heroesDc ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));
        
     })



 })