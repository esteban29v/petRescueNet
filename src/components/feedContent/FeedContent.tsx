// src/components/feedContent/FeedContent.tsx
import React, { useState } from 'react';
import './feedContent.css';

interface Post {
  id: number;
  petName: string;
  petImage: string;
  location: string;
  description: string;
  title: string;
  userName: string;
  userProfileImage: string;
  comments: { user: string; text: string }[];
  isFound: boolean;
  showMoreComments: boolean;
}

interface FeedContentProps {
  filter: { petName: string; isFound: boolean | null };
}

const FeedContent: React.FC<FeedContentProps> = ({ filter }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      petName: "Rex",
      petImage: "/pets/pet1.jpg",
      location: "Chapinero, Bogotá",
      description: "Perro perdido, tiene collar azul. Responde al nombre de Rex.",
      title: "Perro perdido en Chapinero",
      userName: "Juan Pérez",
      userProfileImage: "https://via.placeholder.com/50",
      comments: [
        { user: "Pedro Martínez", text: "¡Lo vi por la calle! Está cerca del parque." },
        { user: "Maria López", text: "¿Sabes si está con collar?" },
        { user: "Carlos Sánchez", text: "¡Espero que lo encuentren pronto!" },
      ],
      isFound: false,
      showMoreComments: false,
    },
    {
      id: 2,
      petName: "Bella",
      petImage: "/pets/pet2.jpeg",
      location: "Usaquén, Bogotá",
      description: "Gato perdido, con ojos amarillos. Lleva un collar rojo.",
      title: "Gata perdida en Usaquén",
      userName: "Ana García",
      userProfileImage: "https://via.placeholder.com/50",
      comments: [
        { user: "Laura Ruiz", text: "La vi cerca de la tienda de abarrotes." },
        { user: "Luis Ramírez", text: "¿Alguien la ha visto más cerca del centro comercial?" },
        { user: "Elena Pérez", text: "¡Espero que regrese pronto!" },
      ],
      isFound: false,
      showMoreComments: false,
    },
    {
      id: 3,
      petName: "Luna",
      petImage: "/pets/pet3.jpeg",
      location: "La Candelaria, Bogotá",
      description: "Gata perdida, es blanca con manchas negras. Lleva collar con campanita.",
      title: "Gata perdida en La Candelaria",
      userName: "Carlos Mendoza",
      userProfileImage: "https://via.placeholder.com/50",
      comments: [
        { user: "Elena Pérez", text: "La vi cerca del Museo de Oro." },
        { user: "Miguel González", text: "Espero que la encuentren pronto." },
        { user: "Sofía Rodríguez", text: "Yo también la vi, estaba cerca de la plaza Bolívar." },
      ],
      isFound: false,
      showMoreComments: false,
    },
    {
      id: 4,
      petName: "Toby",
      petImage: "/pets/pet4.jpeg",
      location: "Teusaquillo, Bogotá",
      description: "Perro de color café con blanco. Tiene una cicatriz en la oreja izquierda.",
      title: "Perro perdido en Teusaquillo",
      userName: "Luis Herrera",
      userProfileImage: "https://via.placeholder.com/50",
      comments: [
        { user: "Sara Gómez", text: "Lo vi en el parque Simón Bolívar." },
        { user: "Andrés Romero", text: "Estaba cerca de la estación de Transmilenio." },
        { user: "Jorge Martín", text: "¡Espero que lo encuentren pronto!" },
      ],
      isFound: false,
      showMoreComments: false,
    },
  ]);

  const addComment = (postId: number, comment: string) => {
    if (comment.trim() !== "") {
      setPosts(posts.map(post =>
        post.id === postId ? { 
          ...post, 
          comments: [...post.comments, { user: "Usuario Anónimo", text: comment }] 
        } : post
      ));
    }
  };

  const markAsFound = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, isFound: true } : post
    ));
  };

  const toggleComments = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, showMoreComments: !post.showMoreComments } : post
    ));
  };

  const filteredPosts = posts.filter(post => {
    const matchesPetName = post.petName.toLowerCase().includes(filter.petName.toLowerCase());
    const matchesFoundStatus = filter.isFound === null || post.isFound === filter.isFound;
    return matchesPetName && matchesFoundStatus;
  });

  return (
    <div className="feed-content">
      {filteredPosts.map(post => (
        <div key={post.id} className={`post ${post.isFound ? 'found' : ''}`}>
          {/* Header con información del usuario */}
          <div className="post-header">
            <div className="user-info">
              <img src={post.userProfileImage} alt={post.userName} className="user-profile-image" />
              <div>
                <h4 className="user-name">{post.userName}</h4>
              </div>
            </div>
            <span className="post-location">{post.location}</span>
          </div>

          {/* Cuerpo de la publicación con el título y el contenido */}
          <div className="post-body">
            <h2 className="post-info-title">{post.title}</h2>
            <h3 className="post-info-pet-name">{post.petName}</h3>
            <p className="post-info-description">{post.description}</p>
            <img src={post.petImage} alt={post.petName} className="pet-image" />
          </div>

          {/* Acciones de la publicación */}
          <div className="post-actions">
            <button
              onClick={() => markAsFound(post.id)}
              disabled={post.isFound}
              className={`found-btn ${post.isFound ? 'disabled' : ''}`}
            >
              {post.isFound ? "Mascota Encontrada" : "Marcar como Encontrada"}
            </button>

            <div className="comments-section">
              <h4>Comentarios</h4>
              <ul>
                {post.comments.slice(0, post.showMoreComments ? post.comments.length : 1).map((comment, index) => (
                  <li key={index} className="comment">
                    <div className="comment-user">
                      <img src="https://via.placeholder.com/30" alt={comment.user} className="comment-avatar" />
                      <strong>{comment.user}</strong>
                    </div>
                    <p>{comment.text}</p>
                  </li>
                ))}
              </ul>

              {/* Botón de "Ver más comentarios" */}
              {post.comments.length > 1 && !post.showMoreComments && (
                <button className="show-more-btn" onClick={() => toggleComments(post.id)}>
                  Ver más comentarios
                </button>
              )}

              {/* Caja para añadir un nuevo comentario */}
              <textarea
                placeholder="Escribe un comentario..."
                onBlur={(e) => {
                  if (e.target.value.trim() !== '') {
                    addComment(post.id, e.target.value);
                    e.target.value = ''; // Limpiar después de enviar el comentario
                  }
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedContent;
