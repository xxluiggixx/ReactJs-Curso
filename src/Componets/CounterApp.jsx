import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ( { value } ) =>{

    const [count, setCount] = useState(value)
    
    const increase = ()=> setCount(count+1)
    const decrease = ()=> setCount(count-1)
    const reset = ()=> setCount(value)

return(
    <>
    <h1>CounterApp</h1>
    <h2> { count } </h2>
    <button onClick={ increase }>{ '+1' }</button>
    <button onClick={ reset }>{ 'Reset' }</button>
    <button onClick={ decrease }>{ '-1' }</button>
    </>
)
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}