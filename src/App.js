import React from 'react';

import './GlobalStyles.scss'

import Banner from './components/Banner'
import Carousel from './components/CarrouselListPage'
import Profile from './components/Profile'
import Accordion from './components/Accordion'
import Email from './components/Email'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Banner/>
      <Carousel/>
      <Profile/>
      <Accordion/>
      <Email/>
      <Footer/>
    </>
  );
}

export default App;
