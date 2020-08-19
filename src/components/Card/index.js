import React from 'react'
import './style.scss'

import cardImage from '../../assets/background.jpg';

const Card = () => {
    return (
        <li className="carousel-slide-grid">
            <div className="flex-container">
                <div className="card">
                    <img src={cardImage} alt=""/>
                    <h3>Lorem Ipsum</h3>
                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                </div> 
            </div>   
        </li>
    )
}

export default Card;