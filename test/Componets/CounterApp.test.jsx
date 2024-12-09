import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../../src/Componets/CounterApp";
/*  
test: Debe de hacer match con el snapshot
Test: debe de mostar el valor inicial de 100 <CounterApp value={100}/> 
*/
describe('Test on file CounterApp', () => { 
    const initialValue= 100
    test('should match with snapshot', () => { 
        const { container } = render(<CounterApp value={initialValue}/> )
        expect(container).toMatchSnapshot();
     })
     test('should match contain value 100', () => { 
        render(<CounterApp value={initialValue}/> )
        expect(screen.getByText(initialValue)).toBeTruthy();
     })
     test('should Increase with button +1', () => { 
        render(<CounterApp value={initialValue}/> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('101')).toBeTruthy();
      })
     test('should Decrement with button -1', () => { 
        render(<CounterApp value={initialValue}/> );
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('99')).toBeTruthy();
      })
     test('should reset with button Reset', () => { 
        render(<CounterApp value={initialValue}/> );
        fireEvent.click( screen.getByText('-1') )
        fireEvent.click( screen.getByText('-1') )
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        expect( screen.getByText( initialValue ) ).toBeTruthy();
      })
 })