import { AnimatePresence, motion } from 'framer-motion';
import { FEATURES } from './Features';
import './FeaturePanel.css';

const variants = {
  enter: {
    opacity: 0,
    x: -28,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    x: 28,
    filter: 'blur(4px)',
    transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] },
  },
};

export default function FeaturePanel({ activeIndex }) {
  const feature = FEATURES[activeIndex];

  return (
    <div className="feat-panel">
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.id}
          className="feat-panel__content"
          variants={variants}
          initial="enter"
          animate="visible"
          exit="exit"
        >
          <span className="feat-panel__icon">{feature.icon}</span>
          <span className="feat-panel__counter">
            {String(activeIndex + 1).padStart(2, '0')} / {String(FEATURES.length).padStart(2, '0')}
          </span>
          <h3 className="feat-panel__title">{feature.title}</h3>
          <p className="feat-panel__desc">{feature.description}</p>

          <div className="feat-panel__tags">
            {activeIndex === 0 && <Tag color="purple">Personalizable</Tag>}
            {activeIndex === 1 && <><Tag color="cyan">Discord</Tag><Tag color="green">Dual Audio</Tag></>}
            {activeIndex === 2 && <><Tag color="purple">Lazy Loading</Tag><Tag color="cyan">Búsqueda</Tag></>}
            {activeIndex === 3 && <Tag color="green">Keyboard Shortcuts</Tag>}
            {activeIndex === 4 && <><Tag color="purple">myinstants.com</Tag><Tag color="cyan">16 categorías</Tag></>}
            {activeIndex === 5 && <><Tag color="purple">Volumen</Tag><Tag color="green">Personalización</Tag></>}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Tag({ children, color }) {
  return (
    <span className={`feat-tag feat-tag--${color}`}>{children}</span>
  );
}
