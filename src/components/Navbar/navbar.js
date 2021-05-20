import React from 'react';
import image from '../../images/image.png'
import './navbar.css';

const navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-light " style={{width:'100%' , marginLeft:'0px'}}>
        <a className="navbar-brand" href="https://www.covid19india.org/">
            <img className="header " src={image}/>
        </a>
        </nav>
    )
}

export default navbar;
