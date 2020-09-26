import React from 'react';

function TextArea(props){
    const {label, onChange, id} = props;
    return (
        <>
            {label && <p>{label}</p>}
            <textarea onChange={onChange} id={id}></textarea>
        </>
    )
};

export default TextArea;