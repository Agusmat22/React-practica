import {getSaludo} from '../../src/base-pruebas/02-template-string.js';


describe('Pruebas del archivo 02-template-string', () => { 


    test('getSaludo debe de retornar "Hola fernando" ', () => { 
        
        const name = 'agustin';
        const message = getSaludo(name);

        expect( message ).toBe(`Hola ${name}`);

     })
    

})