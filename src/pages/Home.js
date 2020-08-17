import React from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Carousel from '../components/CarrouselListPage'
import Profile from '../components/Profile'
import Accordion from '../components/Accordion'
import Email from '../components/Email'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Carousel/>
      <Profile/>
      <Accordion/>
      <Email/>
      <Footer/>
    </>
  );
}

export default Home;
