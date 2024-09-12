import '../styles/Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo2.png'; // Ruta al archivo de tu logo

const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" className="navbar" variant="light" fixed="top">
    <Container>
      <Navbar.Brand href="#header">
        <img className='logo-navbar' src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">Nosotros</Nav.Link>
          <Nav.Link href="#services">Servicios</Nav.Link>
          <Nav.Link href="#works">Trabajos</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
