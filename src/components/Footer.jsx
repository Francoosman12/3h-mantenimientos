import { Container } from 'react-bootstrap';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo2-navbar.png';
import '../styles/Footer.css';

const Footer = () => (
  <footer>
    <Container>
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="3H Mantenimientos" className="footer-logo" />
          <p>
            Servicios de mantenimiento y reparaciones para tu empresa y hogar,
            con más de 12 años de trayectoria en Tucumán.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <a href="#about">Nosotros</a>
          <a href="#services">Servicios</a>
          <a href="#works">Trabajos</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <a href="tel:381155052424"><FaPhoneAlt /> (381) 155052424</a>
          <a href="mailto:carlosesteban_migliori@hotmail.com"><FaEnvelope /> carlosesteban_migliori@hotmail.com</a>
          <a href="https://wa.link/1f4gl1" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
          <span><FaMapMarkerAlt /> B° los Lapachos, Alderetes, Tucumán</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} 3H Mantenimientos. Todos los derechos reservados.</p>
        <p>Página creada por DevOs.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
