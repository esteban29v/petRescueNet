// src/pages/contacto/contacto.tsx
import React from 'react';
import './contacto.css';

const Contacto: React.FC = () => {
  return (
    <div className="contacto-page">
      <div className="contacto-container">
        <h1>Contáctanos</h1>
        <p>¿Tienes alguna pregunta o consulta? Completa el formulario y te responderemos lo antes posible.</p>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
