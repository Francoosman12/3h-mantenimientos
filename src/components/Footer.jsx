import { Container } from 'react-bootstrap';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import BrandMark from './BrandMark';
import logoJl from '../assets/logo-jl.png';
import '../styles/Footer.css';

const Footer = () => (
  <footer>
    <Container>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-lockup">
            <img className="brand-icon" src={logoJl} alt="" />
            <BrandMark className="footer-logo" />
          </div>
          <p>
            Servicios de mantenimiento y reparaciones para tu empresa y hogar,
            con más de 12 años de trayectoria.
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
          <a href="tel:+5493813476033"><FaPhoneAlt /> +54 9 3813 47-6033</a>
          <a href="mailto:Luis.diaz.migliori@gmail.com"><FaEnvelope /> Luis.diaz.migliori@gmail.com</a>
          <a href="https://wa.me/5493813476033" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
          <span><FaMapMarkerAlt /> Pasaje Baaclini 432</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Instalaciones JL. Todos los derechos reservados.</p>
        <p>Luis Francisco Migliori · CUIT 20-38487762-2</p>
        <p>Página creada por <a href="https://portfolio-francoosman.vercel.app/" target="_blank" rel="noopener noreferrer">DevOs</a>.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
