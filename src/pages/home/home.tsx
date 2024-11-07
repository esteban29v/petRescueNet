import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import './home.css';
import './home-responsive.css';

import Carousel from '../../components/carousel/carousel';
import PetCarousel from '../../components/petCarousel/petCarousel';
import Footer from '../../components/footer/footer';
import ReportLostPet from '../../components/reportLostPet/reportLostPet';

const HomePage: React.FC = () => {

  return (
    <div className="home-page">
      <Header />
      <div className='body'>
        <Carousel />
        <hr />
        <PetCarousel />
        <hr />
        <ReportLostPet />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
