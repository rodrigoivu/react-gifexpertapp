import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); // evita el refresh de la pagina

        if( inputValue.trim().length > 2){
            setCategories(c =>  [ inputValue, ...c ]);
            setInputValue('');
        }
        
    }

    return (
    
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value ={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
            
      )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
