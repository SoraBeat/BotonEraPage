import { motion } from 'framer-motion';
import './FeatureProgress.css';

export default function FeatureProgress({ activeIndex, total }) {
  return (
    <div className="feat-progress">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="feat-progress__item">
          {i < total - 1 && (
            <motion.div
              className="feat-progress__line"
              animate={{ scaleY: i < activeIndex ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          <motion.button
            className={`feat-progress__dot${i === activeIndex ? ' feat-progress__dot--active' : ''}`}
            animate={
              i === activeIndex
                ? { scale: 1.4, backgroundColor: 'var(--color-purple)', boxShadow: '0 0 12px rgba(108,99,255,0.7)' }
                : i < activeIndex
                ? { scale: 1, backgroundColor: 'var(--color-purple)', boxShadow: 'none' }
                : { scale: 1, backgroundColor: 'var(--color-border)', boxShadow: 'none' }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-label={`Feature ${i + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
