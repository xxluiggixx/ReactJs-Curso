import { render } from "@testing-library/react"
import FirstApp from '../../src/Componets/FirstApp';
describe('Test FirstApp component', () => { 
    test('should match with snapshot', () => { 
        const title='Hola soy Goku'
        const subTitle='Hola mortales'
        const {container} = render(<FirstApp title={title}/>)
        expect( container ).toMatchSnapshot();
     })
     test('should show title on H1', () => { 
        const title='Hola soy Goku';
        const {container, getByText} = render(<FirstApp title={title}/>)

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title );
      })
 })