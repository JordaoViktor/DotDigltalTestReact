import React from 'react'
import './style.scss'

import image from '../../assets/background.jpg'

const Page = ()=> {
    return(
        <section className="accordion-page" >
            <div className="accordion border">
                <div className="toggle">
                    <input type="checkbox" name="user-accordion" id="section1" className="accordion-input" />
                    <label htmlFor="section1" className="accordion-label border-top">Lorem Ipsum</label>
                    <div className="accordion-content">
                        <div className="accordion-container">
                            <img src={image} alt="" data-testid="image-accordion" />
                            <p data-testid="pharagraph-accordion">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="toggle">
                    <input type="checkbox" name="user-accordion" id="section2" className="accordion-input"/>
                    <label htmlFor="section2" className="accordion-label">Lorem Ipsum</label>
                    <div className="accordion-content">
                        <div className="accordion-container">
                            <img src={image} alt="" data-testid="image-accordion"/>
                            <p data-testid="pharagraph-accordion">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="toggle">
                    <input type="checkbox" name="user-accordion" id="section3" className="accordion-input"/>
                    <label htmlFor="section3" className="accordion-label">Lorem Ipsum</label>
                    <div className="accordion-content">
                        <div className="accordion-container">
                            <img src={image} alt="" data-testid="image-accordion"/>
                            <p data-testid="pharagraph-accordion">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="toggle">
                    <input type="checkbox" name="user-accordion" id="section4" className="accordion-input"/>
                    <label htmlFor="section4" className="accordion-label">Lorem Ipsum</label>
                    <div className="accordion-content">
                        <div className="accordion-container">
                            <img src={image} alt="" data-testid="image-accordion"/>
                            <p data-testid="pharagraph-accordion">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="toggle">
                    <input type="checkbox" name="user-accordion" id="section5" className="accordion-input"/>
                    <label htmlFor="section5" className="accordion-label ">Lorem Ipsum</label>
                    <div className="accordion-content border-bottom">
                        <div className="accordion-container">
                            <img src={image} alt="" data-testid="image-accordion"/>
                            <p data-testid="pharagraph-accordion">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page;