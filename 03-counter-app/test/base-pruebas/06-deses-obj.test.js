import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Prueba de 06-dees-obj', () => { 
    
    test('Debe retornar un objeto', () => { 
        

        //arange

        const clave = '123a';
        const edad = 25

        //act

        const usContextTest = usContext({clave,edad});

        console.log(usContextTest)
        expect( usContextTest ).toEqual( {
            nombreClave: clave,
            anios: edad,
            rangoSup: 'Capitán',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })




     })
 })