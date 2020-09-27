import React, {useContext} from 'react';
import NewContext from '../../contexts/NewContext';
import './style.scss';

function Search(){
    const contextData = useContext(NewContext);
    const {handleInput} = contextData;

    function handleChange(e){
        handleInput(e.target.value);
    }
    return (
    <>
        <p>Search:</p>
        <input className="search-input" onChange={handleChange} type="text"></input>
    </>
    )
};

export default Search;