import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Pet Rescue Net</h3>
          <p>Unimos personas y mascotas para un mejor futuro. Únete a nuestra comunidad y ayúdanos a encontrar hogares para aquellos que más lo necesitan.</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/acerca">Acerca de</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contáctenos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <p>Email: contacto@petrescuenet.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pet Rescue Net - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
