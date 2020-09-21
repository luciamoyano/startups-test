import React, {useContext} from 'react';
import NewContext from '../../contexts/NewContext';

function Search(){
    const contextData = useContext(NewContext);
    const {handleInput} = contextData;

    function handleChange(e){
        handleInput(e.target.value)
    }
    return <input onChange={handleChange} type="text"></input>
};

export default Search;