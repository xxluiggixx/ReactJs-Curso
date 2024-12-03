import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Test on file 05-funciones', () => { 
    test('should return an object', () => { 
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const responseFunction = getUser()


    expect( user ).toEqual( responseFunction )        
    })
    test('should first', () => { 
        const object = {
            uid: 'ABC567',
            username: 'Luis'
        }
        expect( getUsuarioActivo('Luis') ).toEqual( object )
     })
 })