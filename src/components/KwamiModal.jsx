import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, ArrowLeft, Heart, Volume2 } from 'lucide-react';
import { KwamiAvatar } from './KwamiAvatar';
import { sounds } from '../utils/soundEffects';

/**
 * KwamiModal: Ventana modal inmersiva que presenta al Kwami en gran tamaño,
 * su mensaje especial, el significado emocional y opciones de navegación fluida.
 */
export const KwamiModal = ({
  kwami,
  isOpen,
  onClose,
  onNextKwami,
  onPrevKwami,
  currentIndex,
  totalKwamis
}) => {
  // Manejo de teclado (Escape para cerrar, flechas para navegar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNextKwami) onNextKwami();
      if (e.key === 'ArrowLeft' && onPrevKwami) onPrevKwami();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNextKwami, onPrevKwami]);

  if (!isOpen || !kwami) return null;

  return (
    <AnimatePresence>
      <div className="kwami-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
        {/* Fondo oscurecido con desenfoque mágico */}
        <motion.div
          className="modal-backdrop-scrim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Contenedor del Modal */}
        <motion.div
          className="kwami-modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          style={{
            borderColor: kwami.color,
            boxShadow: `0 25px 60px -15px ${kwami.glowColor}, 0 0 40px ${kwami.glowColor}`
          }}
        >
          {/* Cabecera del modal con botón de cierre */}
          <div className="modal-header">
            <div className="modal-kwami-badge" style={{ backgroundColor: `${kwami.color}22`, borderColor: kwami.color }}>
              <span className="badge-symbol">{kwami.symbol}</span>
              <span className="badge-miraculous">{kwami.miraculous}</span>
            </div>

            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Volver a los Kwamis"
              title="Volver a los Kwamis"
            >
              <X size={20} />
            </button>
          </div>

          {/* Sección visual con el Kwami flotante en tamaño grande */}
          <div className="modal-body">
            <div className="modal-avatar-showcase">
              <div
                className="modal-avatar-halo"
                style={{
                  background: `radial-gradient(circle, ${kwami.glowColor} 0%, transparent 70%)`
                }}
              />
              <motion.div
                initial={{ scale: 0.6, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 18, stiffness: 220 }}
              >
                <KwamiAvatar
                  id={kwami.id}
                  size={190}
                  isHovered={true}
                  glowColor={kwami.glowColor}
                />
              </motion.div>

              <div className="kwami-meta-tag">
                <h2 className="modal-kwami-title" style={{ color: kwami.color }}>
                  {kwami.name}
                </h2>
                <span className="modal-kwami-subtitle">{kwami.title}</span>
              </div>
            </div>

            {/* Bocadillo de mensaje mágico del Kwami */}
            <div className="modal-message-bubble">
              <div className="quote-mark-top">“</div>
              <blockquote className="kwami-quote-text">
                {kwami.quote}
              </blockquote>
              <div className="quote-mark-bottom">”</div>

              {/* Explicación del significado del mensaje */}
              <div className="kwami-meaning-box">
                <div className="meaning-title">
                  <Sparkles size={16} style={{ color: kwami.color }} />
                  <span>El significado de su mensaje</span>
                </div>
                <p className="meaning-description">
                  {kwami.meaning}
                </p>
              </div>

              {/* Rasgo del Kwami */}
              <div className="kwami-personality-note">
                <span className="personality-label">Esencia:</span>
                <span className="personality-text">{kwami.personality}</span>
              </div>
            </div>
          </div>

          {/* Barra de progreso e información dentro del modal */}
          <div className="modal-indicator-bar">
            <span>Kwami {currentIndex + 1} de {totalKwamis}</span>
            <div className="modal-dots-track">
              {Array.from({ length: totalKwamis }).map((_, idx) => (
                <span
                  key={idx}
                  className={`modal-dot ${idx === currentIndex ? 'active' : ''}`}
                  style={idx === currentIndex ? { backgroundColor: kwami.color, boxShadow: `0 0 8px ${kwami.color}` } : {}}
                />
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="modal-footer-actions">
            <button
              className="btn-back-to-kwamis"
              onClick={onClose}
              title="Volver al panel principal"
            >
              <ArrowLeft size={16} />
              <span>Volver a los Kwamis</span>
            </button>

            <button
              className="btn-next-message"
              style={{
                backgroundColor: kwami.color,
                boxShadow: `0 4px 18px ${kwami.glowColor}`
              }}
              onClick={() => {
                sounds.playSparkle();
                onNextKwami();
              }}
            >
              <span>Descubrir otro mensaje</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
