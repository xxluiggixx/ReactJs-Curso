describe('Test on file 08-imp-exp', () => { 
    test('should return getHeroeById', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( (heroe) => heroe.id === id );
        expect( heroe ).toEqual( heroeData );
     })
 })