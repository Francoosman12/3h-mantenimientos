import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => (
  <section id="contact">
    <Container>
      <h2>Contacto</h2>
      <div className="contact-content">
        <div className="contact-form">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Tu email" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Celular</Form.Label>
              <Form.Control type="text" placeholder="Tu celular" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className='mt-4' variant="primary" type="submit">Enviar</Button>
          </Form>
        </div>
        <div className="contact-info">
          <p><strong>Dirección:</strong> B° los Lapachos – LT 7 
          Alderetes, Tucumán – C.P.: 4178</p>
          <p><strong>Teléfono:</strong> (381) 155052424</p>
          <p><strong>Email:</strong> carlosesteban_migliori@hotmail.com</p>
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=..."
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Container>
  </section>
);

export default Contact;
