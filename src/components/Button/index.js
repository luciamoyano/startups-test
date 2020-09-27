import React from 'react';
import './style.scss';

function Button(props){
    const {label, onClick} = props 
    return <button onClick={onClick} className="send-button">{label}</button>
};

export default Button;