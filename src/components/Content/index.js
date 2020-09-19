import React, {useContext} from 'react';
import NewContext from '../../contexts/NewContext';

function Content(){
    const contextData = useContext(NewContext);
    const {input} = contextData;
    return (
    <p>Content is {input}</p>
    )
};

export default Content;