import React from 'react';
import image from '../../images/image.png'
import './card.css';
import LazyLoad from 'react-lazyload';

const Card = () => {
    return (
        <LazyLoad>
           <img className="image" src={image} alt="COVID-19"/> 
        </LazyLoad>
    )
}

export default Card