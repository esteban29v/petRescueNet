// src/pages/contacto/contacto.tsx
import React from 'react';
import './contacto.css';

const Contacto: React.FC = () => {
  return (
    <div className="contacto-page">
      <h1>Contáctanos</h1>
      <p>Si tienes alguna pregunta o consulta, no dudes en contactarnos.</p>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
