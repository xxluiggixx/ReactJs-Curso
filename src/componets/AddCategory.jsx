import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputValue = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return;
        onNewCategory(  inputValue.trim() );
        setInputValue('');
    }


  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Gift search" 
            value={inputValue}
            onChange={ handleInputValue }
        />

    </form>
  )
}
