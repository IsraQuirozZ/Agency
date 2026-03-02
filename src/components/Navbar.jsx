import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo" onClick={(e) => handleNav(e, 'hero')}>
        <span className="navbar__logo-accent">Web</span>Agency
      </a>
      <button
        className={`navbar__toggle${menuOpen ? ' navbar__toggle--open' : ''}`}
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {[
          { id: 'services', label: 'Servicios' },
          { id: 'about', label: 'Nosotros' },
          { id: 'portfolio', label: 'Portafolio' },
          { id: 'contact', label: 'Contacto' },
        ].map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(e) => handleNav(e, id)}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => handleNav(e, 'contact')}
          >
            Cotizar ahora
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
