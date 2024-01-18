import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    

    test('getUser debe retornar un objeto', () => { 
        
        //arrange --> la preparacion del test
        const testUser = {

            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        //act --> accion ejecutando el codigo
        const user = getUser();

        //assert -->Realizando las validaciones

        expect( user ).toEqual( testUser ); //valido el objeto
    })

    test('getUsuarioActivo debe retornar un objeto', () => { 

        //arrange

        const name = 'Agustin'
        const userExpected = {
            uid: 'ABC567',
            username: name
        }
        
        //act 

        const user = getUsuarioActivo(name);

        //assert

        expect( user ).toEqual( userExpected );





     })


 })