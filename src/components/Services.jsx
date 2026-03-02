import './Services.css';

const services = [
  {
    icon: '🖥️',
    title: 'Desarrollo Web',
    description:
      'Creamos páginas web modernas, rápidas y adaptadas a tu marca. Desde landing pages hasta tiendas en línea completas, diseñadas para convertir visitantes en clientes.',
    features: ['Diseño responsive', 'Optimizado para SEO', 'Panel de administración', 'Integración de pagos'],
    badge: 'Más popular',
  },
  {
    icon: '⚡',
    title: 'Optimización Web',
    description:
      'Mejoramos el rendimiento, velocidad y posicionamiento de tu sitio. Implementamos las mejores prácticas de SEO y Core Web Vitals para que Google te encuentre primero.',
    features: ['Auditoría técnica', 'Mejora de velocidad', 'SEO On-Page', 'Core Web Vitals'],
    badge: null,
  },
  {
    icon: '🛡️',
    title: 'Mantenimiento',
    description:
      'Mantenemos tu sitio web seguro, actualizado y funcionando al 100%. Monitoreo continuo, copias de seguridad y soporte técnico para que no pierdas ni un minuto de actividad.',
    features: ['Actualizaciones mensuales', 'Copias de seguridad', 'Soporte prioritario', 'Monitoreo 24/7'],
    badge: null,
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="services__header">
        <span className="section-tag">Nuestros Servicios</span>
        <h2 className="section-title">
          Todo lo que tu negocio<br />
          <span className="section-title-accent">necesita en línea</span>
        </h2>
        <p className="section-subtitle">
          Ofrecemos soluciones digitales completas para que tu empresa destaque en internet
          y convierta visitas en ventas.
        </p>
      </div>
      <div className="services__grid">
        {services.map((service) => (
          <div
            className={`service-card${service.badge ? ' service-card--featured' : ''}`}
            key={service.title}
          >
            {service.badge && (
              <span className="service-card__badge">{service.badge}</span>
            )}
            <div className="service-card__icon">{service.icon}</div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            <ul className="service-card__features">
              {service.features.map((f) => (
                <li key={f}>
                  <span className="service-card__check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="service-card__cta" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Solicitar información →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
