import React, { useState } from 'react';
import './feedControls.css';

interface FeedControlsProps {
  setFilter: React.Dispatch<React.SetStateAction<{ petName: string; isFound: boolean | null }>>;
}

const FeedControls: React.FC<FeedControlsProps> = ({ setFilter }) => {
  const [search, setSearch] = useState<string>(''); // Estado para el nombre de la mascota
  const [isFound, setIsFound] = useState<boolean | null>(null); // Estado para el estado de la mascota
  const [showSearchForm, setShowSearchForm] = useState<boolean>(false); // Estado para mostrar el formulario

  const handleSearch = () => {
    setFilter({ petName: search, isFound });
    setShowSearchForm(false);  // Cerrar el formulario de búsqueda después de aplicar el filtro
  };

  const handleClear = () => {
    setSearch('');  // Limpiar el campo de búsqueda
    setIsFound(null);  // Limpiar el estado del select
    setFilter({ petName: '', isFound: null }); // Limpiar los filtros
  };

  return (
    <div className="feed-controls">
      <div className="actions-section">
        {/* Botón de Agregar publicación */}
        <button className="add-post-btn">Agregar publicación</button>

        {/* Botón de Buscar */}
        <button className="search-btn" onClick={() => setShowSearchForm(prev => !prev)}>
          Buscar mascota
        </button>

        {/* Botón de Refrescar feed */}
        <button className="refresh-btn" onClick={() => window.location.reload()}>Refrescar Feed</button>
      </div>

      {/* Mostrar el formulario de búsqueda con animación de collapse */}
      <div className={`search-controls ${showSearchForm ? 'expand' : ''}`}>
        <div className="search-form">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre de mascota"
          />
          <select
            value={isFound === null ? '' : isFound.toString()} // Asegura que el select se actualice correctamente
            onChange={(e) => setIsFound(e.target.value ? JSON.parse(e.target.value) : null)}
          >
            <option value="">Estado de la mascota</option>
            <option value="true">Encontrada</option>
            <option value="false">Perdida</option>
          </select>
          <div className="search-buttons">
            <button onClick={handleSearch} className="search-btn">Aplicar</button>
            <button onClick={handleClear} className="clear-btn">Limpiar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedControls;
