import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Volume2, VolumeX, Gift, Heart, Eye } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

/**
 * Header: Cabecera mágica inspirada en Miraculous con contador de progreso,
 * control de audio y el botón de la sorpresa final «¿Todos tienen algo que decirte?».
 */
export const Header = ({
  discoveredCount,
  totalKwamis,
  soundEnabled,
  onToggleSound,
  onOpenSurprise,
  onDiscoverAll
}) => {
  const isAllDiscovered = discoveredCount === totalKwamis;

  return (
    <header className="miraculous-header">
      {/* Botones de control en la esquina superior */}
      <div className="header-top-controls">
        <button
          className={`control-pill-btn sound-btn ${soundEnabled ? 'active' : ''}`}
          onClick={onToggleSound}
          title={soundEnabled ? 'Silenciar efectos mágicos' : 'Activar efectos mágicos'}
          aria-label={soundEnabled ? 'Silenciar efectos de sonido' : 'Activar efectos de sonido'}
        >
          {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>{soundEnabled ? 'Sonido mágico' : 'Silenciado'}</span>
        </button>

        {discoveredCount < totalKwamis && (
          <button
            className="control-pill-btn quick-reveal-btn"
            onClick={onDiscoverAll}
            title="Despertar todos los Kwamis"
          >
            <Eye size={16} />
            <span>Despertar a todos</span>
          </button>
        )}
      </div>

      {/* Título de la sección */}
      <div className="header-branding">
        <motion.div
          className="header-miraculous-tag"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="dot-ladybug" />
          <span>MIRACULOUS: LAS AVENTURAS DE LADYBUG</span>
          <span className="dot-ladybug" />
        </motion.div>

        <motion.h1
          className="header-main-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          «Un mensaje de los Kwamis» <span className="ladybug-emoji">🐞</span>
          <span className="sparkle-emoji">✨</span>
        </motion.h1>

        <motion.p
          className="header-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Cada Kwami custodia un mensaje especial para ti. Pulsa sobre cada uno para despertar su poder,
          descubrir su cariño y escuchar lo que sus corazones tienen que decirte.
        </motion.p>
      </div>

      {/* Barra de progreso de los Kwamis */}
      <div className="header-progress-container">
        <div className="progress-info-row">
          <span className="progress-label">
            <Sparkles size={16} className="text-yellow-300" />
            Progreso de la Miracle Box
          </span>
          <span className="progress-count-pill">
            {discoveredCount} / {totalKwamis} descubiertos
          </span>
        </div>

        <div className="progress-track">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${(discoveredCount / totalKwamis) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>

        {/* Botón de la Sorpresa Final */}
        <div className="surprise-button-wrapper">
          <motion.button
            className={`btn-final-surprise ${isAllDiscovered ? 'unlocked' : 'peek'}`}
            onClick={onOpenSurprise}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            animate={
              isAllDiscovered
                ? {
                    boxShadow: [
                      '0 0 20px rgba(255, 23, 68, 0.6)',
                      '0 0 35px rgba(255, 214, 0, 0.8)',
                      '0 0 20px rgba(255, 23, 68, 0.6)'
                    ]
                  }
                : {}
            }
            transition={{ repeat: Infinity, duration: 2.2 }}
          >
            <div className="btn-surprise-content">
              <Gift size={20} className="gift-icon" />
              <span className="surprise-text">«¿Todos tienen algo que decirte?»</span>
              <Sparkles size={18} className="sparkle-icon" />
            </div>

            {isAllDiscovered ? (
              <span className="surprise-badge-ready">¡Poder completo reunido! 🌟</span>
            ) : (
              <span className="surprise-badge-hint">
                {totalKwamis - discoveredCount === 1
                  ? '¡Falta solo 1 Kwami!'
                  : `Faltan ${totalKwamis - discoveredCount} por descubrir`}
              </span>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};
