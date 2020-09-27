import React, {useState, useContext} from 'react';
import NewContext from '../../contexts/NewContext';
import Item from '../Item';
import companies from '../../companies.json';
import './style.scss';

function List(){
    const contextData = useContext(NewContext);
    const {input} = contextData;

    const dataStored = {...localStorage};
    const startupsListStringed = Object.values(dataStored)


    const startupList = startupsListStringed.map((item)=>{
        return JSON.parse(item)
    });

    console.log(startupList[0])

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