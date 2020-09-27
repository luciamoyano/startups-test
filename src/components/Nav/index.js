import React from 'react';
import Search from '../Search';
import './style.scss';
import {Link} from 'react-router-dom';

function Nav(props){
    const {visible} = props
    return (
        <nav>
            <img className="main-logo" src="https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/08/26/Recortada/img_sarbat_20190826-164158_imagenes_lv_otras_fuentes_nasa-kbO-U464262579906evH-992x558@LaVanguardia-Web.png" alt="logo" />
            {visible ? 
            <>
                <Search />
                <Link className="link-to-addstartup" to={'/agregar'}>Agregar Startup</Link>
            </>
            :
            <>
                <Link className="link-to-addstartup" to={'/'}>Volver</Link>
            </>
            }
        </nav>
    )
};

export default Nav;