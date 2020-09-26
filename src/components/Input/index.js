import React from 'react';

function Input(props){
    const {label, onChange, id} = props;
    
    return (
        //solo mostrar label sin existe
        <>
        {label && <p>{label}</p>}
        <input 
            type="text" 
            onChange={onChange}
            id={id}
        />
        </>
    )
};

export default Input;