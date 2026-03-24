import { motion } from 'framer-motion';
import './VisualScraper.css';

const lines = [
  { text: '> py -3 scraper.py --category memes', color: 'var(--color-cyan)', delay: 0 },
  { text: 'Buscando sonidos en myinstants.com...', color: 'var(--color-text-muted)', delay: 0.3 },
  { text: '[██████░░░░] bruh.mp3          60%', color: 'var(--color-purple)', delay: 0.6 },
  { text: '[██████████] vine_boom.mp3    100% ✓', color: 'var(--color-green)', delay: 0.9 },
  { text: '[██████████] oof.mp3          100% ✓', color: 'var(--color-green)', delay: 1.2 },
  { text: '[████░░░░░░] miku.mp3          40%', color: 'var(--color-purple)', delay: 1.5 },
  { text: 'Descargados: 3 | En progreso: 1 | Total: 16.000+', color: 'var(--color-text-muted)', delay: 1.8 },
];

export default function VisualScraper() {
  return (
    <div className="v-scraper">
      <div className="v-scraper__header">
        <div className="v-scraper__dot" style={{ background: '#ff5f57' }} />
        <div className="v-scraper__dot" style={{ background: '#ffbd2e' }} />
        <div className="v-scraper__dot" style={{ background: '#28c841' }} />
        <span className="v-scraper__title">Terminal</span>
      </div>
      <div className="v-scraper__body">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="v-scraper__line"
            style={{ color: line.color }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.span
          className="v-scraper__cursor"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          █
        </motion.span>
      </div>
    </div>
  );
}
