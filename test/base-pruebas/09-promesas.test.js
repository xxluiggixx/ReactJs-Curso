import getHeroeByIdAsync from '../../src/base-pruebas/09-promesas'

describe('Test on file 09-promesas', () => { 
    test('should return a Heroe with function getHeroeByIdAsync', (done) => { 
        const id = 1
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect( heroe ).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                } );
            done();
        })
        
     })
 })