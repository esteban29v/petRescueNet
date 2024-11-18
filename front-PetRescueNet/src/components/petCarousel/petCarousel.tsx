import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './petCarousel.css'
import petsJson from './pets.json';

const PetCarousel: React.FC = () => {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div>
      <h1 className='petCarouselTitle'>¡Adopta una mascota ahora!</h1>
      <Carousel className='petCarouselComponent' responsive={responsive}>
      {petsJson.map((mascota) => (
          <div className='petCarouselCard' style={{ padding: '10px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <img
            src={mascota.imagen}
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
          />
          <h3>{mascota.nombre}</h3>

          <p className='title1'>{mascota.animal} - {mascota.raza}</p>
          <p className='title2'>Edad: {mascota.edad} | Sexo: {mascota.sexo}</p>

          <br />
          <hr />
          <br />

          <p className='title3'>{mascota.descripcion}</p>
          <button>Adoptar</button>
        </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PetCarousel;
