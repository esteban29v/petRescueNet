// src/pages/feed/FeedPage.tsx
import React, { useState } from 'react';
import FeedContent from '../../components/feedContent/FeedContent';  // Componente para el feed
import './feedPage.css';  // Archivo de estilos CSS para el feed page
import FeedControls from '../../components/feedControls/FeedControls';  // Nuevo componente para el botón de agregar y buscador

const FeedPage: React.FC = () => {
  const [filter, setFilter] = useState<{ petName: string; isFound: boolean | null }>({
    petName: '',
    isFound: null,
  });

  return (
    <div className="feed-page">
      {/* Controles de Feed: Botón agregar, buscador y refrescar */}
      <FeedControls setFilter={setFilter} />
      
      {/* Aquí es donde se renderiza el feed de publicaciones */}
      <FeedContent filter={filter} />
    </div>
  );
};

export default FeedPage;
