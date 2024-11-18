// src/pages/acerca/acerca.tsx
import React from 'react';
import './acerca.css';

const Acerca: React.FC = () => {
  return (
    <div className="acerca-page">
      <div className="hero-section">
        <h1>Un Hogar para Cada Patita</h1>
        <p>
          En <strong>Pet Rescue Net</strong>, creemos que cada mascota merece amor, cuidado y una segunda oportunidad. 
          Trabajamos incansablemente para rescatar a animales en situación de calle, brindarles el cuidado que necesitan 
          y encontrarles un hogar lleno de amor.
        </p>
      </div>

      <div className="mission-section">
        <h2>Nuestra Misión</h2>
        <p>
          Nuestro objetivo es simple pero poderoso: transformar vidas. A través de una red de rescatistas, voluntarios y 
          aliados, hemos creado una comunidad dedicada a proteger a los animales más vulnerables.
        </p>
      </div>

      <div className="how-to-help">
        <h2>¿Cómo Puedes Ayudar?</h2>
        <ul>
          <li><strong>Adopta:</strong> Dale a una mascota la familia que merece.</li>
          <li><strong>Rescata:</strong> Involúcrate en la búsqueda y protección de animales en riesgo.</li>
          <li><strong>Dona:</strong> Tu apoyo financiero ayuda a cubrir tratamientos médicos, alimentación y refugio.</li>
          <li><strong>Difunde:</strong> Ayúdanos a compartir nuestras historias y conectar más corazones con nuestra causa.</li>
        </ul>
      </div>
    </div>
  );
};

export default Acerca;
