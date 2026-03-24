import { motion } from 'framer-motion';
import './VisualKeybinds.css';

const keys = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M'],
];

const highlighted = ['B', 'R', 'U', 'H'];

export default function VisualKeybinds() {
  return (
    <div className="v-keys">
      <div className="v-keys__badge">
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          ⌨️
        </motion.span>
        Presioná una tecla para reproducir
      </div>

      <div className="v-keys__keyboard">
        {keys.map((row, ri) => (
          <div key={ri} className="v-keys__row">
            {row.map((key) => {
              const isHighlighted = highlighted.includes(key);
              return (
                <motion.div
                  key={key}
                  className={`v-keys__key${isHighlighted ? ' v-keys__key--active' : ''}`}
                  animate={isHighlighted ? {
                    boxShadow: [
                      '0 0 6px rgba(0,255,136,0.3)',
                      '0 0 18px rgba(0,255,136,0.7)',
                      '0 0 6px rgba(0,255,136,0.3)',
                    ],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: highlighted.indexOf(key) * 0.2 }}
                >
                  {key}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="v-keys__hint">
        <span className="v-keys__hint-key">B</span>
        <span className="v-keys__hint-key">R</span>
        <span className="v-keys__hint-key">U</span>
        <span className="v-keys__hint-key">H</span>
        <span className="v-keys__hint-label">→ bruh.mp3</span>
      </div>
    </div>
  );
}
