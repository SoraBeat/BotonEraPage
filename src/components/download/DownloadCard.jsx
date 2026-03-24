import { motion } from 'framer-motion';
import './DownloadCard.css';

export default function DownloadCard({ icon, title, description, badge, href, target, accentColor, delay = 0 }) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="dl-card glass-card"
      style={{ '--accent': accentColor }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03, borderColor: accentColor }}
      whileTap={{ scale: 0.98 }}
    >
      {badge && <span className="dl-card__badge">{badge}</span>}
      <div className="dl-card__icon">{icon}</div>
      <h3 className="dl-card__title">{title}</h3>
      <p className="dl-card__desc">{description}</p>
      <span className="dl-card__arrow">↗</span>
    </motion.a>
  );
}
