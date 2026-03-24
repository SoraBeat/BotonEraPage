import { motion } from 'framer-motion';
import DownloadCard from './DownloadCard';
import './Download.css';

export default function Download() {
  return (
    <div className="download section">
      {/* Background accent */}
      <div className="download__bg" aria-hidden="true" />

      <motion.div
        className="download__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="features-eyebrow">Obtené la app</span>
        <h2 className="section-title gradient-text">Gratis. Para siempre.</h2>
        <p className="section-subtitle">
          BotonEra es un proyecto sin fines de lucro. No tiene precio, no tiene ads, no tiene trucos.
          Simplemente descargalo y usalo.
        </p>
      </motion.div>

      <div className="download__cards">
        <DownloadCard
          icon="📦"
          title="Mediafire"
          description="Descargá el .rar ya compilado con +16.000 sonidos incluidos. Solo descomprimís y ejecutás. Sin instalaciones raras."
          badge="Recomendado"
          href="https://www.mediafire.com/file/mmxypzoh5tsdesj/BotonEra.rar/file"
          target="_blank"
          accentColor="var(--color-purple)"
          delay={0.1}
        />
        <DownloadCard
          icon="⌨️"
          title="GitHub"
          description="Código fuente completo. Instalá las dependencias y ejecutá desde Python. Ideal si querés modificar o contribuir."
          href="https://github.com/SoraBeat/BotonEra"
          target="_blank"
          accentColor="var(--color-cyan)"
          delay={0.22}
        />
      </div>

      <motion.div
        className="download__note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <span>🖥️</span> Requiere Windows 10 / 11 · Para doble salida de audio, instalá{' '}
        <a href="https://vb-audio.com/Cable/" target="_blank" rel="noopener noreferrer" className="download__link">
          VB-Audio Virtual Cable
        </a>{' '}
        (gratis, de terceros).
      </motion.div>
    </div>
  );
}
