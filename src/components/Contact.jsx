import { useState } from 'react';
import './Contact.css';

const SERVICES = [
  'Desarrollo de página web',
  'Optimización SEO',
  'Mantenimiento web',
  'Otro',
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="contact__success">
          <span className="contact__success-icon">🎉</span>
          <h3>¡Mensaje enviado con éxito!</h3>
          <p>Gracias por contactarnos. Nos pondremos en contacto contigo en menos de 24 horas.</p>
          <button className="btn btn--primary" onClick={() => setSubmitted(false)}>
            Enviar otro mensaje
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <span className="section-tag">Contacto</span>
        <h2 className="section-title">
          ¿Listo para comenzar<br />
          <span className="section-title-accent">tu proyecto?</span>
        </h2>
        <p className="section-subtitle">
          Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada
          sin compromiso en menos de 24 horas.
        </p>
      </div>
      <div className="contact__wrapper">
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="name">Nombre completo</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Juan García"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="juan@empresa.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact__field">
            <label htmlFor="service">Servicio de interés</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecciona un servicio</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="contact__field">
            <label htmlFor="message">Cuéntanos sobre tu proyecto</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Describe brevemente qué necesitas y cuál es tu presupuesto aproximado..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn--primary contact__submit">
            Enviar solicitud →
          </button>
        </form>
        <div className="contact__info">
          {[
            { icon: '📧', label: 'Email', value: 'hola@webagency.com' },
            { icon: '📱', label: 'WhatsApp', value: '+52 (55) 1234-5678' },
            { icon: '🕐', label: 'Horario', value: 'Lun – Vie, 9:00 – 18:00' },
            { icon: '🌎', label: 'Cobertura', value: 'Todo México y LATAM' },
          ].map(({ icon, label, value }) => (
            <div className="contact__info-item" key={label}>
              <span className="contact__info-icon">{icon}</span>
              <div>
                <p className="contact__info-label">{label}</p>
                <p className="contact__info-value">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
