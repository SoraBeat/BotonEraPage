import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Descargar', href: '#descargar' },
    { label: 'Legal', href: '#legal' },
  ];

  return (
    <motion.nav
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#inicio" className="navbar__brand">
        <img src="./img/logo.svg" alt="BotonEra logo" className="navbar__logo" />
        <span className="navbar__name">BotonEra</span>
      </a>

      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="navbar__link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#descargar"
        className="navbar__cta"
      >
        Descargar
      </a>
    </motion.nav>
  );
}
