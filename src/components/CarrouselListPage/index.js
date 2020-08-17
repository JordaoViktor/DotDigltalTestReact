import React from 'react';
import './style.scss';

import arrow  from '../../assets/arrow-down.svg'

import cardImage from '../../assets/background.jpg'


const Page = () =>{
    return(
        <section className="carousel-background" id="profile">

            <button className="carousel-button carousel-button-left">
                <img src={arrow} alt=""/>
            </button>

            <div className="carousel-track-container">
                <ul className="carousel-track-grid ">
                    <li className="carousel-slide  current-slide-grid ">
                        <div className="grid-container flex-carousel ">
                            
                            <div className="card flex-item">
                                <img src={cardImage} alt=""/>
                                <h3>Lorem Ipsum</h3>
                                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                            </div>
                            
                            <div className="left-side">
                                <div className="card card-left-side">
                                    <img src={cardImage} alt=""/>
                                    <h3>Lorem Ipsum</h3>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                                </div>
                            </div>
                            <div className="middle ">
                                <div className="card card-middle-side">
                                    <img src={cardImage} alt=""/>
                                    <h3>Lorem Ipsum</h3>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="card card-right-side">
                                    <img src={cardImage} alt=""/>
                                    <h3>Lorem Ipsum</h3>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="carousel-slide current-slide-grid ">
                        <div className="grid-container flex-carousel">
                            <div className="card">
                                <img src={cardImage} alt=""/>
                                <h3>Lorem Ipsum</h3>
                                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                            </div>

                            <div className="left-side ">    
                                <div className="card card-left-side">
                                    <img src={cardImage} alt=""/>
                                    <h3>Lorem Ipsum</h3>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                                </div>
                            </div>
                            <div className="middle ">
                                <div className="card card-middle-side">
                                    <img src={cardImage} alt=""/>
                                    <h3>Lorem Ipsum</h3>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="card card-right-side">
                                    <img src={cardImage} alt=""/>
                                    <h3>Lorem Ipsum</h3>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                                </div>
                                
                            </div>
                        
                        </div>
                    </li>
                    <li className="carousel-slide current-slide-grid">
                        <div className="grid-container flex-carousel">

                            <div className="card flex-item">
                                <img src={cardImage} alt=""/>
                                <h3>Lorem Ipsum</h3>
                                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                            </div>

                            <div className="left-side">
                                <div className="card card-left-side">
                                    <img src={cardImage} alt=""/>
                                    <h3>Lorem Ipsum</h3>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                                </div>
                            </div>
                            <div className="middle ">
                                <div className="card card-middle-side">
                                    <img src={cardImage} alt=""/>
                                    <h3>Lorem Ipsum</h3>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="card card-right-side">
                                    <img src={cardImage} alt=""/>
                                    <h3>Lorem Ipsum</h3>
                                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</article>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <button className="carousel-button carousel-button-right">
                <img src={arrow} alt=""/>
            </button>
        </section>
    )
}

export default Page;
