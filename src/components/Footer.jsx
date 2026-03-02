import './Footer.css';

function Footer() {
  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <a href="#hero" className="footer__logo" onClick={(e) => handleNav(e, 'hero')}>
            <span className="footer__logo-accent">Web</span>Agency
          </a>
          <p className="footer__brand-text">
            Creamos presencias digitales que generan resultados reales para tu negocio.
          </p>
        </div>
        <div className="footer__links-group">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#services" onClick={(e) => handleNav(e, 'services')}>Desarrollo Web</a></li>
            <li><a href="#services" onClick={(e) => handleNav(e, 'services')}>Optimización SEO</a></li>
            <li><a href="#services" onClick={(e) => handleNav(e, 'services')}>Mantenimiento</a></li>
          </ul>
        </div>
        <div className="footer__links-group">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#about" onClick={(e) => handleNav(e, 'about')}>Nosotros</a></li>
            <li><a href="#portfolio" onClick={(e) => handleNav(e, 'portfolio')}>Portafolio</a></li>
            <li><a href="#contact" onClick={(e) => handleNav(e, 'contact')}>Contacto</a></li>
          </ul>
        </div>
        <div className="footer__links-group">
          <h4>Contacto rápido</h4>
          <ul>
            <li><a href="mailto:hola@webagency.com">hola@webagency.com</a></li>
            <li><a href="tel:+525512345678">+52 (55) 1234-5678</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} WebAgency. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ en México</p>
      </div>
    </footer>
  );
}

export default Footer;
