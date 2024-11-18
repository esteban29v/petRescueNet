import React, { useState } from 'react';
import './reportLostPet.css';

const ReportarMascota: React.FC = () => {
  const [formData] = useState({
    nombre: '',
    raza: '',
    sexo: '',
    edad: '',
    ultimaUbicacion: '',
    foto: null,
  });

  return (
    <div>
    <div className="reportar-mascota">
      
      <div className="info-left">
        <img src="/petFound.jpeg" alt="Esperanza" className="image-hope" />
        <p className="text-hope">
        Lamentamos profundamente la desaparición de tu mascota. Haremos todo lo posible para que puedas volver a disfrutar de la compañía de tu ser querido. Con la ayuda de nuestra red social, estamos comprometidos a encontrarla lo antes posible
        </p>
      </div>

      <div className="form-right">
        <h2>Reporta una mascota desaparecida</h2>
        <form className="form">
          <label>
            Nombre:
            <input
              placeholder='Ingresa el nombre de tu mascota'
              type="text"
              name="nombre"
              value={formData.nombre}
              required
            />
          </label>

          <label>
            Raza:
            <input
              placeholder='Ingresa la raza de tu mascota'
              type="text"
              name="raza"
            />
          </label>

          <label>
            Sexo:
            <select
              name="sexo"
              required
            >
              <option value="" disabled>Selecciona el sexo de tu mascota</option>
              <option value="macho">Macho</option>
              <option value="hembra">Hembra</option>
            </select>
          </label>

          <label>
            Edad:
            <input
              placeholder='Ingresa la edad de tu mascota'
              type="text"
              name="edad"
            />
          </label>

          <label>
            Última ubicación:
            <input
              placeholder='Ingresa ultima ubicación de tu mascota'
              type="text"
              name="ultimaUbicacion"
              required
            />
          </label>

          <label>
            Foto de la mascota:
            <input
              type="file"
              name="foto"
            />
          </label>

          <label>
            Descripción
            <textarea placeholder='Ingresa detalles que nos ayuden a identificar a tu mascota' cols={10} rows={10}></textarea>
          </label>

          <button type="submit" className="submit-btn">Reportar</button>
        </form>
      </div>
    </div>

    </div>
    
  );
};

export default ReportarMascota;
