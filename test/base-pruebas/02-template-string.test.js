import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => { 

    test('getSaludo must return "Hola Luis"', () => { 
        const name = 'Luis';
        const message = getSaludo(name);
        expect( message ).toBe(`Hola ${name}`)
     })
 })