import '../styles/Header.css';
import { Carousel, Button } from 'react-bootstrap';
import { FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

// Importando las imágenes
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import logoJl from '../assets/logo-jl.png';

const Header = () => (
  <header id="header">
    <div className="hero">
      <Carousel controls={false} indicators={false} interval={4000} pause={false} fade className="hero-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Trabajo realizado por Instalaciones JL" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Trabajo realizado por Instalaciones JL" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Trabajo realizado por Instalaciones JL" />
        </Carousel.Item>
      </Carousel>
      <div className="hero-overlay" />

      <div className="hero-content">
        <img className="hero-logo" src={logoJl} alt="Instalaciones JL" />
        <span className="hero-eyebrow">Más de 12 años de trayectoria</span>
        <h1 className="hero-title">Mantenimiento y reparaciones de confianza</h1>
        <p className="hero-subtitle">
          Servicios integrales para tu empresa y tu hogar: electricidad, herrería,
          pintura, durlok, plomería, refrigeración y albañilería.
        </p>
        <div className="hero-actions">
          <Button href="#contact" variant="primary">Solicitar presupuesto</Button>
          <Button href="#services" variant="secondary" className="hero-btn-outline">Ver servicios</Button>
        </div>
        <div className="hero-badges">
          <span><FaShieldAlt /> Equipo capacitado</span>
          <span><FaCheckCircle /> Trabajos garantizados</span>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Ir a la siguiente sección">
        <span />
      </a>
    </div>
  </header>
);

export default Header;
