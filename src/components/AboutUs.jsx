import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUsers, FaBullseye } from 'react-icons/fa';
import '../styles/AboutUs.css';

const AboutUs = () => (
  <section id="about">
    <Container>
      <h2>Quienes Somos</h2>
      <div className="about-content">
        <Card className="about-card">
          <FaUsers className="about-icon" />
          <Card.Body>
            <Card.Title>Una Empresa Familiar</Card.Title>
            <Card.Text>
           Con más de 12 años de trayectoria que a 
crecido generando seguridad y confianza, brindando distintos 
servicios a nuestros clientes con el conocimiento y la capacidad de 
maquinarias y equipos de seguridad para los diversos trabajos a 
realizar. Estamos compuesto por un equipo de trabajo capacitado en 
cada área y a su vez cuentan con cursos de seguridad e higiene y 
cursos de capacitaciones.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="about-card">
          <FaBullseye className="about-icon" />
          <Card.Body>
            <Card.Title>Nuestro Objetivo</Card.Title>
            <Card.Text>
              Nuestro objetivo es ofrecer servicios de alta calidad, garantizando tiempo, calidad y precio, siempre con trabajos garantizados.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Button className='mt-4' href="/equipo" variant="secondary">Conocé a nuestro Equipo</Button>
      <Row className="mt-3">
        <Col md={12}>
          <video width="100%" controls>
            <source src="ruta-del-video.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutUs;
