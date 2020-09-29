import React, {useState, useContext} from 'react';
import NewContext from '../../contexts/NewContext';
import Item from '../Item';
import companies from '../../companies.json';
import './style.scss';
import {useLocalStorage} from '../../hooks/localstorage';

function List(){
    const contextData = useContext(NewContext);
    const {input} = contextData;

    const [getLocalStorage, setLocalStorage] = useLocalStorage();
    const startupList = getLocalStorage();

    return (
        <>
        {startupList.length > 0 &&
        <div id="startups-list">
        <h1>Startups List:</h1>
        <ul>
            {startupList.filter((company)=>{
                return company.name.toLowerCase().includes(input.toLowerCase())
            }).map((company, key)=>{
                return  <Item company={company} key={key}/>
            })}


            {/* {companies.filter((company)=>{
                return company.name.toLowerCase().includes(input.toLowerCase())
            }).map((company, key)=>{
                return  <Item company={company} key={key}/>
            })} */}
        </ul>
        </div>
        }
        </>
    )
};

export default List;