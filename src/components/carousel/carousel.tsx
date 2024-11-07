import React, { useState } from 'react';
import './carousel.css';
import './carousel-responsive.css';

import image1 from '../../assets/images/home.jpg';
import image2 from '../../assets/images/home2.jpg';
import image3 from '../../assets/images/home3.jpg';
import image4 from '../../assets/images/home4.jpg';

const Slide1: React.FC = () => (
  <div className="carousel-slide">
    <h1>Bienvenidos a <b style={{color: `var(--primary-green)` }}>Pet Rescue Net</b></h1>
    <p>Tu plataforma de confianza para el rescate y adopción de mascotas.</p>
  </div>
);

const Slide2: React.FC = () => (
  <div className="carousel-slide">
    <h1>Rescata y Adopta</h1>
    <p>Únete a nuestra comunidad y encuentra a tu nueva mascota.</p>
    <button className="learn-more-btn">Conoce Más</button>
  </div>
);

const Slide3: React.FC = () => (
  <div className="carousel-slide">
    <h1>Cuidamos a los Animales</h1>
    <p>Nos dedicamos a brindar la mejor atención a nuestras mascotas.</p>
    <button className="learn-more-btn">Conoce Más</button>
  </div>
);

const Slide4: React.FC = () => (
    <div className="carousel-slide">
      <h1>Cuidamos a los Animales</h1>
      <p>Nos dedicamos a brindar la mejor atención a nuestras mascotas.</p>
      <button className="learn-more-btn">Conoce Más</button>
    </div>
  );

const carouselItems = [
  { component: <Slide1 />, backgroundImage: `url(${image1})` },
  { component: <Slide2 />, backgroundImage: `url(${image2})` },
  { component: <Slide3 />, backgroundImage: `url(${image3})` },
  { component: <Slide4 />, backgroundImage: `url(${image4})` },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="carousel">
        <div className="carousel-item">
            <div className="carousel-background"
                style={{backgroundImage: carouselItems[currentIndex].backgroundImage,}}>
            </div>
            <div className="carousel-content">
            {carouselItems[currentIndex].component}
            </div>
        </div>
      

      <div className="carousel-controls">
        <button className="carousel-button" onClick={prevItem}>❮</button>
        <button className="carousel-button" onClick={nextItem}>❯</button>
      </div>

      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
