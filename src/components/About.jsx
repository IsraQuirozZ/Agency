import './About.css';

const values = [
  { icon: '🎯', title: 'Enfocados en resultados', text: 'Cada decisión que tomamos está orientada a generar valor real para tu negocio.' },
  { icon: '🤝', title: 'Comunicación transparente', text: 'Te mantenemos informado en cada paso del proceso, sin tecnicismos innecesarios.' },
  { icon: '🚀', title: 'Entrega puntual', text: 'Respetamos los plazos acordados porque sabemos que tu tiempo es dinero.' },
  { icon: '🔒', title: 'Seguridad primero', text: 'Implementamos las mejores prácticas de seguridad para proteger tu sitio y tus datos.' },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <span className="section-tag">¿Quiénes somos?</span>
        <h2 className="section-title">
          Apasionados por crear<br />
          <span className="section-title-accent">experiencias digitales</span>
        </h2>
        <p className="about__text">
          Somos una agencia digital especializada en construir presencias web que generan
          impacto. Combinamos diseño atractivo, tecnología moderna y estrategia de negocio
          para que tu empresa brille en internet.
        </p>
        <p className="about__text">
          Desde pequeñas empresas hasta marcas en crecimiento, trabajamos codo a codo
          contigo para entender tus objetivos y convertirlos en soluciones digitales
          que funcionan.
        </p>
        <div className="about__badges">
          <span className="about__badge">React &amp; Vite</span>
          <span className="about__badge">SEO avanzado</span>
          <span className="about__badge">Diseño UI/UX</span>
          <span className="about__badge">Performance 99+</span>
        </div>
      </div>
      <div className="about__values">
        {values.map(({ icon, title, text }) => (
          <div className="about__value" key={title}>
            <span className="about__value-icon">{icon}</span>
            <div>
              <h4 className="about__value-title">{title}</h4>
              <p className="about__value-text">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
