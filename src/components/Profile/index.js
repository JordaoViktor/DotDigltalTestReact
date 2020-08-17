import React from 'react'
import './style.scss'

import image from '../../assets/background.jpg'

const Page = () =>{
    return(
        <section className="profile">
            <div className="profile-container">
                <div className="profile-image">
                    <img src={image} alt="image"/>
                </div>
                <div className="profile-content">
                    <h2 className="title">Lorem Ipsun</h2>
                    <article>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </article>

                    <article className="bold-article">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </article>
                    
                    <article className="italic-article">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </article>

                    <article>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Page;