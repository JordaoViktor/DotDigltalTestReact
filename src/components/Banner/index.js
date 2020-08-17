import React from 'react';
import './style.scss'

import arrowDown  from '../../assets/arrow-down.svg'

const Page = () => {
    return(
        <div class="carousel">
        <div class="carousel-track-container">
            <ul class="carousel-track">
                <li class="carousel-slide current-slide">
                    <section class="carousel-image">
                        <div class="container">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <a href="#profile">
                                <img src={arrowDown} alt="" srcset=""/>
                            </a>
                        </div>
                    </section>
                </li>

                <li class="carousel-slide">
                    <section class="carousel-image">
                        <div class="container">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <a href="#profile">
                                <img src={arrowDown} alt="" srcset=""/>
                            </a>
                        </div>
                    </section>
                </li>

                <li class="carousel-slide">
                    <section class="carousel-image">
                        <div class="container">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <a href="#profile">
                                <img src={arrowDown} alt="" srcset=""/>
                            </a>
                        </div>
                    </section>
                </li>
            </ul>
        </div>
        <div class="carousel-nav">
            <button class="carousel-indicator current-slide"></button>
            <button class="carousel-indicator"></button>
            <button class="carousel-indicator"></button>
        </div>
    </div>
    )    
}

export default Page;