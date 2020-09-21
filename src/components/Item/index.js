import React from 'react';
import './style.scss';

function Item(props){
    const {name, description, logo} = props.company
    return (
    <li className="item">    
        <img src={logo} />
        <h2>{name}</h2>
        <p>{description}</p>
    </li>
    )
}

export default Item;