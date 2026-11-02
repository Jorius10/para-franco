import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, Heart } from 'lucide-react';
import { KwamiAvatar } from './KwamiAvatar';
import { sounds } from '../utils/soundEffects';

/**
 * KwamiCard: Tarjeta interactiva individual para cada Kwami con diseño glassmorphism,
 * animación flotante, símbolo del Miraculous y estado de descubrimiento.
 */
export const KwamiCard = ({ kwami, isDiscovered, onSelect, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    sounds.playSparkle();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    sounds.playKwamiOpen();
    onSelect(kwami);
  };

  return (
    <motion.div
      className="kwami-card-container"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Kwami ${kwami.name}, ${kwami.virtue}. Toca para abrir su mensaje secreto.`}
    >
      <div
        className="kwami-card"
        style={{
          borderColor: isHovered ? kwami.color : 'rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered
            ? `0 14px 35px -5px ${kwami.glowColor}, 0 0 20px ${kwami.glowColor}`
            : '0 8px 24px rgba(0, 0, 0, 0.45)'
        }}
      >
        {/* Resplandor ambiental de fondo en la tarjeta */}
        <div
          className="card-ambient-glow"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${kwami.glowColor} 0%, transparent 70%)`,
            opacity: isHovered ? 0.85 : 0.35
          }}
        />

        {/* Emblema del símbolo / Miraculous en la esquina superior */}
        <div className="card-top-bar">
          <span
            className="miraculous-symbol-badge"
            title={`Símbolo: ${kwami.miraculous}`}
            style={{
              backgroundColor: isHovered ? kwami.color : 'rgba(255, 255, 255, 0.08)',
              color: isHovered ? '#ffffff' : kwami.color,
              borderColor: kwami.color
            }}
          >
            <span className="symbol-icon">{kwami.symbol}</span>
          </span>

          {isDiscovered ? (
            <span className="discovered-badge" title="Mensaje descubierto">
              <Check size={12} className="check-icon" />
              <span>Revelado</span>
            </span>
          ) : (
            <span className="pulse-sparkle-badge" title="Mensaje por descubrir">
              <Sparkles size={12} className="sparkle-icon" />
              <span>Por descubrir</span>
            </span>
          )}
        </div>

        {/* Personaje Kwami protagonista */}
        <div className="card-avatar-wrapper">
          <KwamiAvatar
            id={kwami.id}
            size={120}
            isHovered={isHovered}
            glowColor={kwami.glowColor}
          />
        </div>

        {/* Información y virtud */}
        <div className="card-content">
          <h3 className="kwami-name" style={{ color: kwami.color }}>
            {kwami.name}
          </h3>

          <p className="kwami-animal-virtue">
            {kwami.virtue}
          </p>

          <div className="card-footer-action">
            <span className="action-hint">
              {isDiscovered ? 'Releer mensaje secreto' : 'Toca para despertar'}
            </span>
            <span className="arrow-glow" style={{ color: kwami.color }}>→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
