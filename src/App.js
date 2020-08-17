import React from 'react';

import './GlobalStyles.scss'

import Banner from './components/Banner'
import Carousel from './components/CarrouselListPage'
import Profile from './components/Profile'
import Accordion from './components/Accordion'
function App() {
  return (
    <>
      <Banner/>
      <Carousel/>
      <Profile/>
      <Accordion/>
    </>
  );
}

export default App;
