import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBolt, FaTools, FaPaintBrush, FaHammer, FaWrench, FaSnowflake, FaCogs } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => (
  <section id="services">
    <Container>
      <h2>¿Qué servicios brindamos?</h2>
      <Row>
        <Col md={4} className="col-md-4">
          <FaBolt className="service-icon" size={50} />
          <h3>Electricidad</h3>
          <p>En General.</p>
        </Col>
        <Col md={4} className="col-md-4">
          <FaTools className="service-icon" size={50} />
          <h3>Herrería</h3>
          <p>Reparaciones, tinglados, portones, zingueria, etc.</p>
        </Col>
        <Col md={4} className="col-md-4">
          <FaPaintBrush className="service-icon" size={50} />
          <h3>Pintura</h3>
          <p>Planchado de paredes y techos, trabajos en altura, pintura en general, etc.</p>
        </Col>
        <Col md={4} className="col-md-4">
          <FaHammer className="service-icon" size={50} />
          <h3>Durlok</h3>
          <p>Techos, tabiques interior exterior, muebles, etc.</p>
        </Col>
        <Col md={4} className="col-md-4">
          <FaWrench className="service-icon" size={50} />
          <h3>Plomería</h3>
          <p>Reparaciones de cañerías, instalaciones con artefactos, gasista, etc.</p>
        </Col>
        <Col md={4} className="col-md-4">
          <FaSnowflake className="service-icon" size={50} />
          <h3>Refrigeración</h3>
          <p>Mantenimiento a.c, instalaciones, reparaciones, etc.</p>
        </Col>
        <Col md={4} className="col-md-4">
          <FaCogs className="service-icon" size={50} />
          <h3>Albañilería</h3>
          <p>Nivelación de superficie, mampostería, pisos, etc.</p>
        </Col>
      </Row>
      <Button href="/presupuesto" variant="primary" className='mt-4'>Solicitar Presupuesto</Button>
    </Container>
  </section>
);

export default Services;
