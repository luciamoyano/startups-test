import React from 'react';

function TextArea(props){
    const {label, onChange, id} = props;
    return (
        <>
            {label && <label>{label}</label>}
            <textarea onChange={onChange} id={id} className="addstartup-input"></textarea>
        </>
    )
};

export default TextArea;