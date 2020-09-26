import React, {useState} from 'react';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import {useValidate} from '../../hooks/validate';
import {useLocalStorage} from '../../hooks/localstorage';

function AddStartup(){
    const [fields, setFields] = useState({});
    const [startupsList, setStartupsList] = useState({});
    const requiredFields = ['name', 'logo', 'email'];
    // const errors es igual al resultado de la funcion de useValidate
    const errors = useValidate(fields, requiredFields);
    // el custom hook solo se puede usar en el componente, no dentro de una funcion
    const allStartups = useLocalStorage();

    function handleInput(e) {
        const {value, id} = e.target;
        //creamos un objeto donde cada propiedad es un input
        setFields({
            ...fields,
            [id]: value
        });
    }

    function onClick(){
        //chequeamos si el array de errores esta vacio o no
        if (errors.length == 0) {
            console.log('Sin errores');
            setStartupsList(allStartups(fields));
        } else {
            console.log(`Tenes un error en ${errors}`)
        }
    }
    //opcional web twitter instagram

    return (
        <>
        <Input id='name' label='Nombre' onChange={handleInput}/>
        <Input id='logo' label='Logo' onChange={handleInput}/>
        <Input id='email' label='Email' onChange={handleInput}/>
        <TextArea id='description' label='Descripcion' onChange={handleInput}/>
        <Input id='web' label='Web' onChange={handleInput}/>
        <Input id='twitter' label='Twitter' onChange={handleInput}/>
        <Input id='instagram' label='Instagram' onChange={handleInput}/>
        <Button onClick={onClick} label='Enviar' />
        </>
    )
};

export default AddStartup;