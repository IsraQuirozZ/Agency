import './Hero.css';

function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <span className="hero__tag">Agencia Digital</span>
        <h1 className="hero__title">
          Tu presencia digital,<br />
          <span className="hero__title-accent">elevada al máximo</span>
        </h1>
        <p className="hero__subtitle">
          Creamos páginas web a medida, optimizamos tu rendimiento en línea
          y mantenemos tu sitio siempre al día para que tú te enfoques en lo
          que importa: hacer crecer tu negocio.
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => handleScroll('services')}>
            Ver servicios
          </button>
          <button className="btn btn--outline" onClick={() => handleScroll('contact')}>
            Habla con nosotros
          </button>
        </div>
        <div className="hero__stats">
          {[
            { value: '50+', label: 'Proyectos completados' },
            { value: '98%', label: 'Clientes satisfechos' },
            { value: '5★', label: 'Valoración promedio' },
          ].map(({ value, label }) => (
            <div className="hero__stat" key={label}>
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__card hero__card--browser">
          <div className="hero__browser-bar">
            <span className="hero__dot hero__dot--red" />
            <span className="hero__dot hero__dot--yellow" />
            <span className="hero__dot hero__dot--green" />
            <div className="hero__url-bar">miempresa.com</div>
          </div>
          <div className="hero__browser-body">
            <div className="hero__mock-header" />
            <div className="hero__mock-line hero__mock-line--wide" />
            <div className="hero__mock-line" />
            <div className="hero__mock-line hero__mock-line--short" />
            <div className="hero__mock-btn" />
          </div>
        </div>
        <div className="hero__card hero__card--metric">
          <span className="hero__metric-icon">⚡</span>
          <div>
            <p className="hero__metric-value">99/100</p>
            <p className="hero__metric-label">Performance Score</p>
          </div>
        </div>
        <div className="hero__card hero__card--traffic">
          <span className="hero__metric-icon">📈</span>
          <div>
            <p className="hero__metric-value">+240%</p>
            <p className="hero__metric-label">Tráfico orgánico</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
