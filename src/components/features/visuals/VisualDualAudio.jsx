import { motion } from 'framer-motion';
import './VisualDualAudio.css';

export default function VisualDualAudio() {
  return (
    <div className="v-dual">
      {/* Source */}
      <motion.div
        className="v-dual__source"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="v-dual__source-icon">🎛️</span>
        <span>BotonEra</span>
      </motion.div>

      {/* Split lines as SVG */}
      <svg className="v-dual__svg" viewBox="0 0 200 160" fill="none">
        {/* Main line */}
        <motion.line
          x1="30" y1="80" x2="100" y2="80"
          stroke="url(#lineGrad)" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        {/* Branch top */}
        <motion.path
          d="M100 80 L170 40"
          stroke="url(#lineGrad)" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        />
        {/* Branch bottom */}
        <motion.path
          d="M100 80 L170 120"
          stroke="url(#lineGrad2)" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />
        {/* Node circle */}
        <motion.circle
          cx="100" cy="80" r="5"
          fill="var(--color-purple)"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.55, duration: 0.3, type: 'spring' }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="100%" stopColor="#00D9FF" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="100%" stopColor="#00FF88" />
          </linearGradient>
        </defs>
      </svg>

      {/* Outputs */}
      <div className="v-dual__outputs">
        <motion.div
          className="v-dual__output"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <span>🎧</span>
          <div>
            <div className="v-dual__output-label">Auriculares</div>
            <div className="v-dual__output-sub">Solo vos escuchás</div>
          </div>
        </motion.div>
        <motion.div
          className="v-dual__output"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <span>💬</span>
          <div>
            <div className="v-dual__output-label" style={{ color: 'var(--color-green)' }}>Discord</div>
            <div className="v-dual__output-sub">Todos escuchan</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
