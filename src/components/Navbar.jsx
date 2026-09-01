import '../styles/Navbar.css';
import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import logo from '../assets/logo2-navbar.png';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      variant={scrolled ? 'light' : 'dark'}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#header">
          <img className="logo-navbar" src={logo} alt="3H Mantenimientos" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#about">Nosotros</Nav.Link>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#works">Trabajos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link
              className="nav-link-pdf"
              href="https://drive.google.com/file/d/1nQ3r5ASUk0ursd4BJ9sq7kCbylrY1Tux/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="nav-link-pdf-icon" />
              Descargar PDF
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
