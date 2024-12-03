import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe(' Test on file 07-deses-arr', () => { 
    test('should return one string and number', () => { 
        const [letters, numbers] = retornaArreglo();

        expect( typeof letters ).toBe( 'string')
        expect( typeof numbers ).toBe( 'number')
        
        expect( typeof letters ).toEqual( expect.any(String) )

     })
 })