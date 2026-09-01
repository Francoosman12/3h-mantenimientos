import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBolt, FaTools, FaPaintBrush, FaHammer, FaWrench, FaSnowflake, FaCogs } from 'react-icons/fa';
import '../styles/Services.css';

const services = [
  { icon: FaBolt, title: 'Electricidad', text: 'Instalaciones y reparaciones en general.' },
  { icon: FaTools, title: 'Herrería', text: 'Reparaciones, tinglados, portones, zinguería, etc.' },
  { icon: FaPaintBrush, title: 'Pintura', text: 'Planchado de paredes y techos, trabajos en altura, pintura en general.' },
  { icon: FaHammer, title: 'Durlok', text: 'Techos, tabiques interior/exterior, muebles, etc.' },
  { icon: FaWrench, title: 'Plomería', text: 'Reparación de cañerías, instalación de artefactos, gasista.' },
  { icon: FaSnowflake, title: 'Refrigeración', text: 'Mantenimiento de A.C, instalaciones y reparaciones.' },
  { icon: FaCogs, title: 'Albañilería', text: 'Nivelación de superficies, mampostería, pisos, etc.' },
];

const Services = () => (
  <section id="services">
    <Container>
      <div className="section-header">
        <span className="section-eyebrow">Nuestros servicios</span>
        <h2 className="section-title">¿Qué servicios brindamos?</h2>
        <p className="section-subtitle">
          Soluciones completas de mantenimiento para empresas y hogares, con profesionales
          capacitados en cada área.
        </p>
      </div>
      <Row className="g-4">
        {services.map(({ icon: Icon, title, text }) => (
          <Col md={4} sm={6} key={title} className="d-flex">
            <div className="service-card">
              <div className="service-icon-wrap">
                <Icon className="service-icon" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </Col>
        ))}
      </Row>
      <div className="services-cta">
        <Button href="/presupuesto" variant="primary">Solicitar presupuesto</Button>
      </div>
    </Container>
  </section>
);

export default Services;
