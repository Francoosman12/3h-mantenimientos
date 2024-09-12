import { Container } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => (
  <footer>
    <Container>
      <p>&copy; {new Date().getFullYear()} Mi Empresa. Página creada por Mi Nombre.</p>
    </Container>
  </footer>
);

export default Footer;
