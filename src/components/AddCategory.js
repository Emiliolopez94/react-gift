import React, { useState } from 'react';
import PropTypes from 'prop-types';  

const AddCategory = ({Setcategories}) => {

const [inputValue, setInput] = useState('');

const InputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
}

const handleSubmit = (e) =>{
    e.preventDefault();
    //Setcategories([...categories, inputValue])

    //validar
    if(inputValue.trim().length > 2)
    Setcategories(cats => [inputValue,...cats])
    setInput('');
}


    return (  
    <>
    <form onSubmit={ handleSubmit} >
    <input
    type="text"
    value={inputValue}
    onChange={InputChange}
    />
    </form>
    </>
    );
}

AddCategory.propTypes = {
    Setcategories: PropTypes.func.isRequired
}

export default AddCategory;