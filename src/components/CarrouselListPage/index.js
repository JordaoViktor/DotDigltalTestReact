import React from 'react';
import './style.scss';
import Slider from 'react-slick'
import Card from '../Card';
import arrow from '../../assets/arrow-down-banner.svg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, width: '60px', height:'60px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, width: '60px', height:'60px'}}
        onClick={onClick}
      />
    );
  }
const Page = () =>{

    let settings = {
        arrow:true,
        infinite:false,
        speed:500,
        slidesToShow:3,
        slidesToScroll:3,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>
        
    }

    return(
        <section className="carousel-background" id="profile">
            <div className="carousel-track-container">
                <Slider className="slide-grid"{...settings}>
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Page;
