import React from "react";
import { useState } from "react"
import  PropTypes  from "prop-types"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        // console.log(target.value)
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        // previene que se refresque la pagina
        event.preventDefault();
        
        // Si es un espacio en blanco o una sola letra sale de la funcion
        if(inputValue.trim().length <= 1) return;

        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory ( inputValue.trim() );

        // limpiamos el input value para que el input despues de enviar quede vacio
        setInputValue('');

    }

    return (
        <form onSubmit={ (event) => onSubmit(event) } aria-label="form">
            <input 
                type="text"
                placeholder="Buscar Gifs ..."
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange = { onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = { 
    onNewCategory: PropTypes.func.isRequired,
}
