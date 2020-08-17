import React from 'react';

import './GlobalStyles.scss'

import Banner from './components/Banner'
import Carousel from './components/CarrouselListPage'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <Banner/>
      <Carousel/>
      <Profile/>
    </>
  );
}

export default App;
