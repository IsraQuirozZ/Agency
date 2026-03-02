import './Portfolio.css';

const projects = [
  {
    title: 'TiendaRopa Online',
    category: 'E-commerce',
    description: 'Tienda en línea completa con catálogo de productos, carrito de compras y pasarela de pagos.',
    tags: ['React', 'Node.js', 'Stripe'],
    color: '#6366f1',
  },
  {
    title: 'RestauranteGourmet',
    category: 'Landing Page',
    description: 'Página de presentación con menú interactivo, galería y sistema de reservaciones en línea.',
    tags: ['React', 'CSS', 'Calendly'],
    color: '#8b5cf6',
  },
  {
    title: 'ConsultoríaLegal',
    category: 'Sitio Corporativo',
    description: 'Sitio institucional con blog jurídico, formulario de consulta y portafolio de casos.',
    tags: ['React', 'CMS', 'SEO'],
    color: '#06b6d4',
  },
  {
    title: 'GimnasioPro',
    category: 'Web App',
    description: 'Plataforma de gestión de membresías, clases y seguimiento de progreso físico.',
    tags: ['React', 'Firebase', 'Charts'],
    color: '#f59e0b',
  },
  {
    title: 'ImmobiliariaPlus',
    category: 'Portal Web',
    description: 'Portal inmobiliario con búsqueda avanzada, mapa interactivo y sistema de contacto.',
    tags: ['React', 'Maps API', 'SEO'],
    color: '#10b981',
  },
  {
    title: 'ClinicaDental',
    category: 'Landing Page',
    description: 'Sitio médico con agenda de citas, servicios, testimonios y ubicación.',
    tags: ['React', 'UX', 'Booking'],
    color: '#ef4444',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <span className="section-tag">Portafolio</span>
        <h2 className="section-title">
          Proyectos que hablan<br />
          <span className="section-title-accent">por sí solos</span>
        </h2>
        <p className="section-subtitle">
          Una muestra de los sitios web que hemos creado para empresas de distintos
          sectores e industrias.
        </p>
      </div>
      <div className="portfolio__grid">
        {projects.map((p) => (
          <div className="portfolio__card" key={p.title}>
            <div className="portfolio__card-img" style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}>
              <div className="portfolio__card-preview">
                <div className="portfolio__preview-bar">
                  <span className="portfolio__dot" />
                  <span className="portfolio__dot" />
                  <span className="portfolio__dot" />
                </div>
                <div className="portfolio__preview-line portfolio__preview-line--header" style={{ background: p.color }} />
                <div className="portfolio__preview-line" />
                <div className="portfolio__preview-line portfolio__preview-line--short" />
              </div>
              <span className="portfolio__category">{p.category}</span>
            </div>
            <div className="portfolio__card-body">
              <h3 className="portfolio__card-title">{p.title}</h3>
              <p className="portfolio__card-desc">{p.description}</p>
              <div className="portfolio__tags">
                {p.tags.map((tag) => (
                  <span className="portfolio__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
