// src/pages/ProfilePage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeedContent from '../../components/feedContent/FeedContent';  // Importa FeedContent
import './profilePage.css';

interface Post {
  id: number;
  petName: string;
  petImage: string;
  location: string;
  description: string;
  title: string;
  userName: string;
  userProfileImage: string;
  comments: { user: string; text: string; userProfileImage: string }[];
  isFound: boolean;
}

const ProfilePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      petName: "Rex",
      petImage: "/pets/pet1.jpg",
      location: "Chapinero, Bogotá",
      description: "Perro perdido, tiene collar azul. Responde al nombre de Rex.",
      title: "Perro perdido en Chapinero",
      userName: "Juan Pérez",
      userProfileImage: "/users/user10.png",
      comments: [],
      isFound: false,
    },
    {
      id: 2,
      petName: "Bella",
      petImage: "/pets/pet2.jpg",
      location: "Usaquén, Bogotá",
      description: "Gata perdida, con ojos amarillos. Lleva un collar rojo.",
      title: "Gata perdida en Usaquén",
      userName: "Juan Pérez",
      userProfileImage: "/users/user10.png",
      comments: [],
      isFound: false,
    },
  ]);

  return (
    <div className="profile-container">
      {/* Información de usuario con fondo diferenciado */}
      <div className="profile-info-card">
        <div className="profile-header">
          <img src="/users/user10.png" alt="User Profile" className="profile-image" />
          <h2>Juan Pérez</h2>
          <Link to="/profile/edit-photo" className="edit-photo-link">Modificar Foto de Perfil</Link>
        </div>

        <div className="profile-details">
          <h3>Información Personal</h3>
          <p>Ubicación: Bogotá, Colombia</p>
          <p>Email: juanperez@email.com</p>
          <Link to="/profile/edit" className="edit-profile-link">Editar Información</Link>
        </div>
      </div>

      {/* Sección de Feed de publicaciones */}
      <div className="feed-section">
        <h3>Mis Publicaciones</h3>
        <FeedContent filter={{ petName: "Rex", isFound: null }} /> {/* Usamos FeedContent aquí */}
      </div>
    </div>
  );
};

export default ProfilePage;
