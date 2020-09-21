import React, {useContext} from 'react';
import NewContext from '../../contexts/NewContext';
import Item from '../Item';
import companies from '../../companies.json';
import './style.scss';

function List(){
    const contextData = useContext(NewContext);
    const {input} = contextData;
    console.log(companies);
    return (
        <ul>
            {companies.filter((company)=>{
                return company.name.toLowerCase().includes(input.toLowerCase())
            }).map((company, key)=>{
                return  <Item company={company} key={key}/>
            })}
        </ul>
    )
};

export default List;