// src/pages/home/home.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../components/header/header';  // Componente Header
import './home.css';
import './home-responsive.css';

import Carousel from '../../components/carousel/carousel';  // Componente Carousel
import PetCarousel from '../../components/petCarousel/petCarousel';  // Componente PetCarousel
import Footer from '../../components/footer/footer';  // Componente Footer
import ReportLostPet from '../../components/reportLostPet/reportLostPet';  // Componente ReportLostPet

import Contacto from '../contacto/contacto';    // Página de contacto
import Acerca from '../acerca/acerca';          // Página de acerca

import FeedPage from '../feed/FeedPage';  // Importa la nueva página de Feed
import ProfilePage from '../profile/ProfilePage'; // Importa la página de perfil
import Login from '../../routes/login';
import Singup from '../../routes/singup';
import Dashboard from '../../routes/dashboard';
import ProtectedRoute from '../../routes/protectedRoute';


const HomePage: React.FC = () => {
  return (
    <Router>
      <div className="home-page">
        <Header />
        <div className="body">
          {/* Rutas para las páginas principales */}
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/feedHome" element={<FeedPage />} />  {/* Ruta del feed */}
            <Route path="/profile" element={<ProfilePage />} />  {/* Ruta de perfil */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Singup />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/feedHome" element={<FeedPage />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

// Componente de contenido para la página principal
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
