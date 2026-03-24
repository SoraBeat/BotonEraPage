import { motion } from 'framer-motion';
import './FloatingOrbs.css';

const orbs = [
  { color: 'rgba(108,99,255,0.18)', size: 500, top: '-10%', left: '-5%', delay: 0, duration: 8 },
  { color: 'rgba(0,217,255,0.12)', size: 380, top: '10%', right: '-8%', delay: 1.5, duration: 10 },
  { color: 'rgba(0,255,136,0.09)', size: 300, bottom: '5%', left: '30%', delay: 0.8, duration: 12 },
];

export default function FloatingOrbs() {
  return (
    <div className="orbs" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="orb"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: orb.delay * 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}
