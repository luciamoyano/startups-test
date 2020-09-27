import React from 'react';
import './style.scss';

function Input(props){
    const {label, onChange, id} = props;
    
    return (
        //solo mostrar label sin existe
        <>
        {label && <label>{label}</label>}
        <input 
            type="text" 
            onChange={onChange}
            id={id}
            className="addstartup-input"
        />
        </>
    )
};

export default Input;