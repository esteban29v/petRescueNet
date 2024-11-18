// src/components/feedContent/FeedContent.tsx
import React, { useState } from 'react';
import './feedContent.css';

interface Comment {
  user: string;
  text: string;
  userProfileImage: string; // Nueva propiedad para la imagen de perfil del usuario
}

interface Post {
  id: number;
  petName: string;
  petImage: string;
  location: string;
  description: string;
  title: string;
  userName: string;
  userProfileImage: string;
  comments: Comment[];
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
      userProfileImage: "/users/user10.png",
      comments: [
        { 
          user: "Pedro Martínez", 
          text: "¡Lo vi por la calle! Está cerca del parque.", 
          userProfileImage: "/users/user2.png" // URL de la imagen personalizada
        },
        { 
          user: "Maria López", 
          text: "¿Sabes si está con collar?", 
          userProfileImage: "/users/user3.png" // URL de la imagen personalizada
        },
        { 
          user: "Carlos Sánchez", 
          text: "¡Espero que lo encuentren pronto!", 
          userProfileImage: "/users/user4.png" // URL de la imagen personalizada
        },
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
      userProfileImage: "/users/user5.png",
      comments: [
        { 
          user: "Laura Ruiz", 
          text: "La vi cerca de la tienda de abarrotes.", 
          userProfileImage: "/users/user6.png" // URL de la imagen personalizada
        },
        { 
          user: "Luis Ramírez", 
          text: "¿Alguien la ha visto más cerca del centro comercial?", 
          userProfileImage: "/users/user7.png" // URL de la imagen personalizada
        },
        { 
          user: "Elena Pérez", 
          text: "¡Espero que regrese pronto!", 
          userProfileImage: "/users/user8.png" // URL de la imagen personalizada
        },
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
      userProfileImage: "/users/user9.png",
      comments: [
        { 
          user: "Elena Pérez", 
          text: "La vi cerca del Museo de Oro.", 
          userProfileImage: "/users/user10.png" // URL de la imagen personalizada
        },
        { 
          user: "Miguel González", 
          text: "Espero que la encuentren pronto.", 
          userProfileImage: "/users/user1.png" // URL de la imagen personalizada
        },
        { 
          user: "Sofía Rodríguez", 
          text: "Yo también la vi, estaba cerca de la plaza Bolívar.", 
          userProfileImage: "/users/user2.png" // URL de la imagen personalizada
        },
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
      userProfileImage: "/users/user3.png",
      comments: [
        { 
          user: "Sara Gómez", 
          text: "Lo vi en el parque Simón Bolívar.", 
          userProfileImage: "/users/user4.png" // URL de la imagen personalizada
        },
        { 
          user: "Andrés Romero", 
          text: "Estaba cerca de la estación de Transmilenio.", 
          userProfileImage: "/users/user5.png" // URL de la imagen personalizada
        },
        { 
          user: "Jorge Martín", 
          text: "¡Espero que lo encuentren pronto!", 
          userProfileImage: "/users/user6.png" // URL de la imagen personalizada
        },
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
          comments: [...post.comments, { user: "Usuario Anónimo", text: comment, userProfileImage: "/users/user7.png" }] 
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
                      <img src={comment.userProfileImage} alt={comment.user} className="comment-avatar" />
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
