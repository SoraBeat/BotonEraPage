import { motion } from 'framer-motion';
import './Legal.css';

const MIT_TEXT = `MIT License

Copyright (c) 2024 SoraBeat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.`;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Legal() {
  return (
    <div className="legal section">
      <motion.div className="legal__header" {...fadeUp(0)}>
        <span className="features-eyebrow">Información Legal</span>
        <h2 className="section-title">Licencias y avisos</h2>
      </motion.div>

      <div className="legal__grid">
        {/* Non-profit block — most prominent */}
        <motion.div className="legal__block legal__block--nonprofit" {...fadeUp(0.1)}>
          <div className="legal__block-icon">💜</div>
          <h3 className="legal__block-title">Proyecto sin fines de lucro</h3>
          <p className="legal__block-text">
            BotonEra es un proyecto personal y comunitario desarrollado por SoraBeat. Es completamente
            gratuito y se distribuye sin ninguna intención de monetización: sin anuncios, sin
            suscripciones, sin compras integradas. Somos así de piola.
          </p>
          <p className="legal__block-text">
            Si te gusta el proyecto, podés contribuir con código, reportar bugs o simplemente usarlo
            y pasarla bien. Eso es todo lo que pedimos.
          </p>
        </motion.div>

        {/* MIT License */}
        <motion.div className="legal__block legal__block--mit" {...fadeUp(0.2)}>
          <div className="legal__block-icon">📄</div>
          <h3 className="legal__block-title">Licencia de código: MIT</h3>
          <p className="legal__block-text" style={{ marginBottom: '16px' }}>
            El código fuente de BotonEra está disponible bajo la Licencia MIT. Podés usar, modificar
            y distribuir el software libremente, siempre que se incluya el aviso de copyright.
          </p>
          <pre className="legal__mit-text">{MIT_TEXT}</pre>
        </motion.div>

        {/* Sounds disclaimer */}
        <motion.div className="legal__block" {...fadeUp(0.3)}>
          <div className="legal__block-icon">🔊</div>
          <h3 className="legal__block-title">Sonidos de terceros</h3>
          <p className="legal__block-text">
            Los sonidos incluidos en el paquete descargable y los obtenidos mediante el scraper son
            propiedad de sus respectivos dueños. BotonEra no reclama ningún derecho sobre estos
            contenidos. El scraper únicamente accede a material disponible públicamente en
            myinstants.com. El uso de dichos sonidos es responsabilidad exclusiva del usuario.
          </p>
        </motion.div>

        {/* VB-Audio disclaimer */}
        <motion.div className="legal__block" {...fadeUp(0.4)}>
          <div className="legal__block-icon">🔗</div>
          <h3 className="legal__block-title">VB-Audio Virtual Cable</h3>
          <p className="legal__block-text">
            La funcionalidad de doble salida de audio depende de{' '}
            <a
              href="https://vb-audio.com/Cable/"
              target="_blank"
              rel="noopener noreferrer"
              className="legal__link"
            >
              VB-Audio Virtual Cable
            </a>
            , una herramienta de terceros independiente desarrollada por VB-Audio Software. BotonEra
            no está afiliado con VB-Audio Software. El uso de dicha herramienta está sujeto a sus
            propios términos y condiciones.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer className="legal__footer" {...fadeUp(0.5)}>
        <img src="./img/logo.svg" alt="BotonEra" className="legal__footer-logo" />
        <div className="legal__footer-text">
          <strong>BotonEra</strong> — Hecho con 💜 por SoraBeat · {new Date().getFullYear()}
        </div>
        <a
          href="https://github.com/SoraBeat/BotonEra"
          target="_blank"
          rel="noopener noreferrer"
          className="legal__footer-link"
        >
          GitHub →
        </a>
      </motion.footer>
    </div>
  );
}
