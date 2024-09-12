import '../styles/Header.css';
import { Carousel, Button } from 'react-bootstrap';

// Importando las imágenes
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import logo1 from '../assets/logo1.png';



const Header = () => (
  <header id="header">
    <div className="carousel-container">
      <Carousel controls={false} indicators={false} interval={3000} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Proyecto 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Proyecto 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Proyecto 3" />
        </Carousel.Item>
      </Carousel>
      <div className="carousel-caption-fixed">
        <img className='logo1' src={logo1} alt="" />
        <h3></h3>
        <p>Servicios de mantenimiento y reparaciones para tu empresa y hogar.</p>
        <Button href="#contact" variant="primary">Contactar</Button>
      </div>
    </div>
  </header>
);

export default Header;
