import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp';

describe('Test on file 08-imp-exp', () => { 
    test('getHeroeById should return a heroe by ID ', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        expect( heroe ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        } );
     })

    test('getHeroeById should return Undefind if doesnt exit by ID ', () => { 
        const id = 10;
        const heroe = getHeroeById(id);
        expect( heroe ).toBeFalsy();
     })
     /* 
     Tarea:
     Debe de retornar un arreglo con los heroes de DC
     Length = 3
     toEqual al arreglo filtrado


     debe de retornar un arreglo con los heroes de Marvel
     length = 2
     */
    test('getHeroesByOwner should return an array with DC heroes', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect( heroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ] );
        expect( heroes.length ).toBe( 3 );
     })
    test('getHeroesByOwner should return an array with Marvel heroes', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect( heroes.length ).toBe( 2 );
     })

 })