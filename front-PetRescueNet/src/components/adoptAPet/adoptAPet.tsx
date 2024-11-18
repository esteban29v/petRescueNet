import React, { useEffect, useState } from 'react';
import './adoptAPet.css';

import pet1 from '../../assets/images/pets/pet1.jpg';
import pet2 from '../../assets/images/pets/pet2.jpeg';
import pet3 from '../../assets/images/pets/pet3.jpeg';
import pet4 from '../../assets/images/pets/pet4.jpeg';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const carouselAdoptAPetItems: CarouselItem[] = [
  { id: 1, 
    image: pet1,
    title: "Mascota 1", 
    description: "Descripción de la mascota 1" 
  },
  { id: 1, 
    image: pet2,
    title: "Mascota 2", 
    description: "Descripción de la mascota 1" 
  },
  { id: 1, 
    image: pet3,
    title: "Mascota 3", 
    description: "Descripción de la mascota 1" 
  },
  { id: 1, 
    image: pet4,
    title: "Mascota 4", 
    description: "Descripción de la mascota 1" 
  },
];

const AdoptAPet: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextItem = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselAdoptAPetItems.length);
  };

  const prevItem = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselAdoptAPetItems.length) % carouselAdoptAPetItems.length);
  };

  useEffect(() => {
    const handleTransitionEnd = () => setIsTransitioning(false);
    const carouselAdoptAPetContainer = document.querySelector('.carouselAdoptAPet');
    carouselAdoptAPetContainer?.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      carouselAdoptAPetContainer?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  const getTranslateX = () => {
    const offset = (currentIndex * -100) + 50;
    return `translateX(${offset}%)`;
  };

  return (
    <div className='AdoptAPet'>
      <h1 align='center'>Adopta una mascota</h1>
      <div className="carouselAdoptAPet-container">
        <button className="carouselAdoptAPet-btn" onClick={prevItem}>❮</button>

        <div className={`carouselAdoptAPet ${isTransitioning ? 'is-transitioning' : ''}`}>
          {carouselAdoptAPetItems.map((item, index) => {
            const position = (index - currentIndex + carouselAdoptAPetItems.length) % carouselAdoptAPetItems.length;

            return (
              <div
                key={item.id}
                className={`carouselAdoptAPet-item ${position === 0 ? 'center' : position === 1 ? 'right' : position === carouselAdoptAPetItems.length - 1 ? 'left' : 'hidden'}`}
              >
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>

        <button className="carouselAdoptAPet-btn" onClick={nextItem}>❯</button>
      </div>
    </div>
  );
};

export default AdoptAPet;
