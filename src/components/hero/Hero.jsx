import { motion } from 'framer-motion';
import GridBackground from './GridBackground';
import FloatingOrbs from './FloatingOrbs';
import './Hero.css';

const wordVariants = {
  hidden: { y: 80, opacity: 0, filter: 'blur(6px)' },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const taglineWords = ['Tu', 'soundboard.', 'Tu', 'Discord.', 'Tu', 'momento.'];

  return (
    <div className="hero">
      <GridBackground />
      <FloatingOrbs />

      <div className="hero__content">
        {/* Logo */}
        <motion.div
          className="hero__logo-wrap"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
        >
          <img src="./img/logo.svg" alt="BotonEra" className="hero__logo" />
        </motion.div>

        {/* Title */}
        <h1 className="hero__title gradient-text" aria-label="BotonEra">
          {'BotonEra'.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p className="hero__tagline" {...fadeUp(0.55)}>
          {taglineWords.map((word, i) => (
            <span key={i} className={i % 2 === 1 ? 'hero__tagline-accent' : ''}>
              {word}{' '}
            </span>
          ))}
        </motion.p>

        {/* Nonprofit badge */}
        <motion.div className="hero__badge" {...fadeUp(0.75)}>
          <span className="hero__badge-dot" />
          Proyecto 100% gratuito · Sin fines de lucro
        </motion.div>

        {/* CTA */}
        <motion.div className="hero__cta-wrap" {...fadeUp(0.9)}>
          <motion.a
            href="#descargar"
            className="hero__cta-btn"
            animate={{
              boxShadow: [
                '0 0 20px rgba(108,99,255,0.3)',
                '0 0 50px rgba(108,99,255,0.7)',
                '0 0 20px rgba(108,99,255,0.3)',
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Descargar ahora
          </motion.a>
          <a href="https://github.com/SoraBeat/BotonEra" target="_blank" rel="noopener noreferrer" className="hero__cta-secondary">
            Ver código fuente →
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          {...fadeUp(1.3)}
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
        >
          <div className="hero__scroll-line" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 6l5 5 5-5" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
