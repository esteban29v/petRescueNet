import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../components/header/header';
import './home.css';
import './home-responsive.css';

import Carousel from '../../components/carousel/carousel';
import PetCarousel from '../../components/petCarousel/petCarousel';
import Footer from '../../components/footer/footer';
import ReportLostPet from '../../components/reportLostPet/reportLostPet';

import Contacto from '../contacto/contacto';    // Nueva página de contacto
import Acerca from '../acerca/acerca';          // Nueva página de acerca

const HomePage: React.FC = () => {
  return (
    <Router>
      <div className="home-page">
        <Header />
        <div className='body'>
          {/* Rutas para las páginas principales */}
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca" element={<Acerca />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

// Componente HomePage content
const HomeContent: React.FC = () => {
  return (
    <>
      <Carousel />
      <hr />
      <PetCarousel />
      <hr />
      <ReportLostPet />
    </>
  );
};

export default HomePage;
