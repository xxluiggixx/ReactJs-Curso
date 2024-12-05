import { render, screen } from "@testing-library/react"
import FirstApp from '../../src/Componets/FirstApp';
describe('Test FirstApp component', () => { 
  const title='Hola soy Goku'
  const subTitle='Hola mortales'

    test('should match with snapshot', () => { 
        const {container} = render(<FirstApp title={title}/>)
        expect( container ).toMatchSnapshot();
     })

     test('should show title on H1', () => { 
      render(<FirstApp title={title}/>);
      
      expect( screen.getByText(title) ).toBeTruthy();
      })

     test('should show subtitle', () => { 
      render(<FirstApp title={title} subTitle={subTitle}/>);
      
      expect( screen.getAllByText( subTitle ).length).toBe(1);
      })
 })