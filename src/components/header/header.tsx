import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importa Link para navegación sin recarga
import './header.css';
import './header-responsive.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Estado para el menú hamburguesa

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Cambia el estado del menú
  };

  return (
    <header className="header">
      <div className="logo">
        <svg className="logo-icon" fill="#FFFFFF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 253" enableBackground="new 0 0 256 253" xmlSpace="preserve">
          <path d="M126.544,211.321c2.151,3.716,0.978,8.605-2.738,10.854c-3.814,2.249-8.605,0.978-10.854-2.738l-14.277-24.055v20.242 c0,4.4-3.52,7.921-7.921,7.921c-4.4,0-7.921-3.52-7.921-7.921v-51.827l-10.756-6.161c-2.249-1.271-3.031-4.107-1.76-6.258 c1.271-2.249,4.107-3.031,6.258-1.76l6.845,3.911h53l25.033,12.223v19.851c0,1.76-0.293,3.325-2.64,3.325v26.598 c0,4.4-3.52,7.921-7.921,7.921c-4.4,0-7.921-3.52-7.921-7.921v-26.598h-29.825L126.544,211.321z M138.865,152.063l22.491,10.659 v-8.116h18.286l6.649-14.472l-47.426-22.589V152.063z M2,69c0,13.678,9.625,25.302,22,29.576V233H2v18h252v-18h-22V98.554 c12.89-3.945,21.699-15.396,22-29.554v-8H2V69z M65.29,68.346c0,6.477,6.755,31.47,31.727,31.47 c21.689,0,31.202-19.615,31.202-31.47c0,11.052,7.41,31.447,31.464,31.447c21.733,0,31.363-20.999,31.363-31.447 c0,14.425,9.726,26.416,22.954,30.154V233H42V98.594C55.402,94.966,65.29,82.895,65.29,68.346z M222.832,22H223V2H34v20L2,54h252 L222.832,22z"></path>
        </svg>
        <h1 className="logo-text"><a href="/">Pet Rescue Net</a></h1>
      </div>

      {/* Menú de navegación */}
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/contacto">Contáctenos</Link></li>
          <li><Link to="/acerca">Acerca de</Link></li>
          <span className='noLoginMenu'>&nbsp;</span>
          <li className="loginBtn"><Link to="/login">Iniciar sesión</Link></li>
          <li><Link to="/signup">Regístrate</Link></li>
        </ul>
      </nav>

      {/* Botón de menú hamburguesa */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </header>
  );
};

export default Header;
