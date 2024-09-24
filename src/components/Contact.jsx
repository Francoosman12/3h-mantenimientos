import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createMailToLink = () => {
    const { name, email, phone, message } = formData;
    const subject = `Presupuesto solicitado por ${name}`;
    const body = `Hola, me llamo ${name}.\n\nMe gustaría solicitar un presupuesto.\n\nDetalles de contacto:\nEmail: ${email}\nCelular: ${phone}\n\nMensaje:\n${message}`;
    
    return `mailto:carlosesteban_migliori@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <Container>
        <h2>Contacto</h2>
        <div className="contact-content">
          <div className="contact-form">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Tu email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu celular"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button className="mt-4" variant="primary">
                <a
                  href={createMailToLink()} // Aquí generamos el link mailto
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Enviar correo
                </a>
              </Button>
            </Form>
          </div>
          <div className="contact-info">
            <p><strong>Dirección:</strong> B° los Lapachos – LT 7 Alderetes, Tucumán – C.P.: 4178</p>
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
};

export default Contact;
