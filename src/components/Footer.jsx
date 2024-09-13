import { Container } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => (
  <footer>
    <Container>
      <p className='descripcion-footer'>&copy; {new Date().getFullYear()} 3H Mantenimiento | Página creada por DevOs.</p>
    </Container>
  </footer>
);

export default Footer;
