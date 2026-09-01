import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
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
    
    return `mailto:Luis.diaz.migliori@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <Container>
        <div className="section-header">
          <span className="section-eyebrow">Hablemos</span>
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            Contanos qué necesitás y te respondemos a la brevedad con tu presupuesto.
          </p>
        </div>
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
              <Button className="mt-4" variant="primary" href={createMailToLink()}>
                Enviar correo
              </Button>
            </Form>
          </div>
          <div className="contact-info">
            <h3 className="contact-info-title">Nuestros datos</h3>
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-info-icon" />
              <p><strong>Dirección</strong><br />Pasaje Baaclini 432</p>
            </div>
            <div className="contact-info-item">
              <FaPhoneAlt className="contact-info-icon" />
              <p><strong>Teléfono</strong><br />+54 9 3813 47-6033</p>
            </div>
            <div className="contact-info-item">
              <FaEnvelope className="contact-info-icon" />
              <p><strong>Email</strong><br />Luis.diaz.migliori@gmail.com</p>
            </div>
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
