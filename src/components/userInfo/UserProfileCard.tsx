// src/components/UserProfileCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfileCard.css';  // Asegúrate de tener un archivo de estilos específico para este componente

interface UserProfileCardProps {
  userName: string;
  userProfileImage: string;
  userLocation: string;
  userEmail: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ userName, userProfileImage, userLocation, userEmail }) => {
  return (
    <div className="profile-info-card">
      <div className="profile-header">
        <img src={userProfileImage} alt="User Profile" className="profile-image" />
        <h2>{userName}</h2>
        <Link to="/profile/edit-photo" className="edit-photo-link">Modificar Foto de Perfil</Link>
      </div>

      <div className="profile-details">
        <h3>Información Personal</h3>
        <p>Ubicación: {userLocation}</p>
        <p>Email: {userEmail}</p>
        <Link to="/profile/edit" className="edit-profile-link">Editar Información</Link>
      </div>
    </div>
  );
};

export default UserProfileCard;
