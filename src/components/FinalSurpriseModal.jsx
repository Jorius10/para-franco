import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, X, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KWAMIS_DATA, FINAL_SURPRISE_DATA } from '../data/kwamisData';
import { KwamiAvatar } from './KwamiAvatar';
import { sounds } from '../utils/soundEffects';

/**
 * FinalSurpriseModal: Sorpresa final épica donde la Miracle Box se abre
 * y todos los 12 Kwamis se reúnen al unísono para transmitir el mensaje final.
 */
export const FinalSurpriseModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      sounds.playFinale();

      // Ráfaga mágica de confeti de Miraculous
      const duration = 3.5 * 1000;
      const animationEnd = Date.now() + duration;
      const miraculousColors = ['#ff1744', '#00e676', '#ffd600', '#c084fc', '#00b4d8', '#ffffff'];

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.7 },
          colors: miraculousColors
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.7 },
          colors: miraculousColors
        });

        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const triggerMoreConfetti = () => {
    sounds.playFinale();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#ff1744', '#00e676', '#ffd600', '#c084fc', '#00b4d8', '#ffffff']
    });
  };

  return (
    <AnimatePresence>
      <div className="final-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
        <motion.div
          className="final-backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          className="final-modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: 'spring', damping: 22, stiffness: 240 }}
        >
          {/* Botón de cierre */}
          <button className="final-close-button" onClick={onClose} aria-label="Cerrar sorpresa">
            <X size={22} />
          </button>

          {/* Resplandor central de la Miracle Box */}
          <div className="miracle-box-portal-glow" />

          {/* Imagen de la Miracle Box y constelación de Kwamis */}
          <div className="miracle-assembly-area">
            <div className="miracle-box-centerpiece">
              <img
                src="/images/miracle-box.jpg"
                alt="Miracle Box de Miraculous"
                className="miracle-box-img"
              />
              <div className="box-radiance-ring" />
            </div>

            {/* Los 12 Kwamis flotando en armonía alrededor */}
            <div className="kwamis-circle-orbit">
              {KWAMIS_DATA.map((kwami, index) => {
                const angle = (index / KWAMIS_DATA.length) * (2 * Math.PI) - Math.PI / 2;
                const radius = 175; // Distancia desde el centro en desktop
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={kwami.id}
                    className="orbiting-kwami-node"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x,
                      y
                    }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      type: 'spring',
                      damping: 14
                    }}
                    title={`${kwami.name} (${kwami.virtue})`}
                  >
                    <div
                      className="orbit-avatar-badge"
                      style={{
                        borderColor: kwami.color,
                        boxShadow: `0 0 16px ${kwami.glowColor}`
                      }}
                    >
                      <KwamiAvatar
                        id={kwami.id}
                        size={48}
                        glowColor={kwami.glowColor}
                        isInteractive={false}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mensaje Final Revelado */}
          <motion.div
            className="final-message-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="final-badge-label">
              <Sparkles size={16} className="text-yellow-400" />
              <span>EL MENSAJE DE TODOS LOS KWAMIS</span>
              <Sparkles size={16} className="text-yellow-400" />
            </div>

            <h2 className="final-title">
              {FINAL_SURPRISE_DATA.title}
            </h2>

            <p className="final-subtitle">
              {FINAL_SURPRISE_DATA.subtitle}
            </p>

            <blockquote className="final-quote-box">
              <p className="final-quote-text">
                «{FINAL_SURPRISE_DATA.message}»
              </p>
            </blockquote>

            <p className="final-dedication">
              {FINAL_SURPRISE_DATA.dedication}
            </p>

            {/* Acciones finales */}
            <div className="final-actions-row">
              <button
                className="btn-replay-magic"
                onClick={triggerMoreConfetti}
                title="Lanzar más destellos mágicos"
              >
                <Sparkles size={18} />
                <span>¡Celebrar de nuevo!</span>
              </button>

              <button
                className="btn-finish-modal"
                onClick={onClose}
              >
                <span>Volver a la galería</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
