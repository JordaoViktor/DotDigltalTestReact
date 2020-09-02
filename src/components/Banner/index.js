import React from 'react';
import Slider from 'react-slick'
import './style.scss'

import arrowDown  from '../../assets/arrow-down-banner.svg'

const Page = () => {
    const settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            className="dots-nav"
          >
            <ul style={{ marginBottom: "40px", display:'flex'}}> {dots} </ul>
          </div>
        ),
        customPaging: () => (
          <button className='button'></button>
        )
      };

    return(
        <div className="carousel">
        <div className="carousel-track-container">
            <Slider {...settings}>
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
            </Slider>
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