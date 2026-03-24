import { AnimatePresence, motion } from 'framer-motion';
import { FEATURES } from './Features';
import VisualDualAudio from './visuals/VisualDualAudio';
import VisualKeybinds from './visuals/VisualKeybinds';
import VisualScraper from './visuals/VisualScraper';
import './FeatureVisual.css';

const variants = {
  enter: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    y: -20,
    transition: { duration: 0.28, ease: [0.7, 0, 0.84, 0] },
  },
};

const SCREENSHOT_MAP = {
  1: './img/Screenshot1.png',
  2: './img/Screenshot2.png',
  3: './img/Screenshot3.png',
};

const CUSTOM_VISUALS = {
  dual: <VisualDualAudio />,
  keybinds: <VisualKeybinds />,
  scraper: <VisualScraper />,
};

export default function FeatureVisual({ activeIndex }) {
  const feature = FEATURES[activeIndex];

  return (
    <div className="feat-visual">
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.id}
          className="feat-visual__card glass-card"
          variants={variants}
          initial="enter"
          animate="visible"
          exit="exit"
        >
          {feature.screenshotIndex ? (
            <div className="feat-visual__screenshot-wrap">
              <img
                src={SCREENSHOT_MAP[feature.screenshotIndex]}
                alt={feature.title}
                className="feat-visual__screenshot"
              />
              <div className="feat-visual__screenshot-overlay" />
            </div>
          ) : (
            <div className="feat-visual__custom">
              {CUSTOM_VISUALS[feature.id]}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
