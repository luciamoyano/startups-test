import React from 'react';
import './style.scss';

function Item(props){
    const {name, description, logo} = props.company
    return (
    <li className="item">    
        <img src={logo} />
        <div className="item-info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </li>
    )
}

export default Item;