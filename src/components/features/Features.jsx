import { useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, motion } from 'framer-motion';
import FeaturePanel from './FeaturePanel';
import FeatureVisual from './FeatureVisual';
import FeatureProgress from './FeatureProgress';
import './Features.css';

export const FEATURES = [
  {
    id: 'grid',
    icon: '🎛️',
    title: 'Grid Personalizable',
    description:
      'Armá tu tablero con cientos de botones. Asignale colores y emojis a cada sonido para encontrarlo al instante, incluso en medio de una partida.',
    screenshotIndex: 1,
  },
  {
    id: 'dual',
    icon: '🎧',
    title: 'Doble Salida de Audio',
    description:
      'Reproducí en tus auriculares Y en Discord al mismo tiempo. BotonEra rutea el audio a través de VB-Audio Virtual Cable para que tus compañeros escuchen todo.',
    screenshotIndex: null,
  },
  {
    id: 'search',
    icon: '🔍',
    title: '+16.000 Sonidos, Cero Lag',
    description:
      'Lazy loading inteligente para que la app vole aunque tengas miles de sonidos cargados. Filtrá en tiempo real mientras escribís.',
    screenshotIndex: 3,
  },
  {
    id: 'keybinds',
    icon: '⌨️',
    title: 'Atajos de Teclado',
    description:
      'Asigná una tecla a cualquier sonido y activalo sin soltar el mouse. Perfecto para reacciones instantáneas en el momento justo.',
    screenshotIndex: null,
  },
  {
    id: 'scraper',
    icon: '📥',
    title: 'Scraper Integrado',
    description:
      'Descargá miles de sonidos de myinstants.com con un solo comando. 16 categorías: Memes, Anime, Juegos, Música y más.',
    screenshotIndex: null,
  },
  {
    id: 'volume',
    icon: '🔊',
    title: 'Control de Volumen',
    description:
      'Ajustá el volumen maestro sin salir de la app. Personalizá emojis y colores desde el modal integrado para que tu tablero sea único.',
    screenshotIndex: 2,
  },
];

const N = FEATURES.length;

export default function Features() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const activeMotion = useTransform(scrollYProgress, (p) =>
    Math.min(Math.floor(p * N), N - 1)
  );

  useMotionValueEvent(activeMotion, 'change', (v) => {
    setActiveIndex(Math.max(0, v));
  });

  const orbY = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);

  return (
    <div className="features-section" ref={sectionRef}>
      {/* Section label */}
      <div className="features-sticky" aria-label="Características">
        {/* Background orb parallax */}
        <motion.div
          className="features-orb"
          style={{ y: orbY }}
          aria-hidden="true"
        />

        {/* Header shown above grid */}
        <div className="features-header">
          <span className="features-eyebrow">¿Por qué BotonEra?</span>
          <h2 className="section-title gradient-text">Todo lo que necesitás</h2>
        </div>

        {/* Main grid */}
        <div className="features-grid">
          <FeatureProgress activeIndex={activeIndex} total={N} />
          <FeaturePanel activeIndex={activeIndex} />
          <FeatureVisual activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
}
