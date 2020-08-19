import React from 'react';
import './style.scss'

import arrowDown  from '../../assets/arrow-down-banner.svg'

const Page = () => {
    return(
        <div className="carousel">
        <div className="carousel-track-container">
            <ul className="carousel-track">
                <li className="carousel-slide current-slide">
                    <section className="carousel-image">
                        <div className="container">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <a href="#profile">
                                <img src={arrowDown} alt=""/>
                            </a>
                        </div>
                    </section>
                </li>

                <li className="carousel-slide">
                    <section className="carousel-image">
                        <div className="container">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <a href="#profile">
                                <img src={arrowDown} alt=""/>
                            </a>
                        </div>
                    </section>
                </li>

                <li className="carousel-slide">
                    <section className="carousel-image">
                        <div className="container">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <a href="#profile">
                                <img src={arrowDown} alt=""/>
                            </a>
                        </div>
                    </section>
                </li>
            </ul>
        </div>
        <div className="carousel-nav">
            <button className="carousel-indicator current-slide"></button>
            <button className="carousel-indicator"></button>
            <button className="carousel-indicator"></button>
        </div>
    </div>
    )    
}

export default Page;