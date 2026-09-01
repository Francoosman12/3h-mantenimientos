import { Container, Card, Button } from 'react-bootstrap';
import { FaUsers, FaBullseye } from 'react-icons/fa';
import '../styles/AboutUs.css';

const AboutUs = () => (
  <section id="about">
    <Container>
      <div className="section-header">
        <span className="section-eyebrow">Quiénes somos</span>
        <h2 className="section-title">Una empresa familiar con experiencia</h2>
        <p className="section-subtitle">
          Más de 12 años de trayectoria brindando seguridad y confianza a nuestros clientes.
        </p>
      </div>
      <div className="about-content">
        <Card className="about-card">
          <div className="about-icon-wrap">
            <FaUsers className="about-icon" />
          </div>
          <Card.Body>
            <Card.Title>Una Empresa Familiar</Card.Title>
            <Card.Text>
              Hemos crecido generando seguridad y confianza, brindando distintos servicios a
              nuestros clientes con el conocimiento y la capacidad de maquinarias y equipos de
              seguridad para los diversos trabajos a realizar. Contamos con un equipo capacitado
              en cada área, con cursos de seguridad e higiene y capacitaciones constantes.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="about-card">
          <div className="about-icon-wrap">
            <FaBullseye className="about-icon" />
          </div>
          <Card.Body>
            <Card.Title>Nuestro Objetivo</Card.Title>
            <Card.Text>
              Ofrecer servicios de alta calidad, garantizando tiempo, calidad y precio, siempre
              con trabajos garantizados de principio a fin.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="about-cta">
        <Button href="/equipo" variant="secondary">Conocé a nuestro equipo</Button>
      </div>
    </Container>
  </section>
);

export default AboutUs;
