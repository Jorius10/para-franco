import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * KwamiAvatar: Ilustraciones vectoriales dinámicas con personalidad única,
 * parpadeo de ojos, flotación orgánica y auras mágicas reactivas.
 */
export const KwamiAvatar = ({
  id,
  size = 120,
  isHovered = false,
  isInteractive = true,
  glowColor = 'rgba(255,255,255,0.4)'
}) => {
  const [isWinking, setIsWinking] = useState(false);

  // Variación orgánica de animación según el ID
  const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const floatDuration = 3 + (seed % 3) * 0.4;
  const floatDelay = (seed % 5) * 0.2;

  const handlePointerEnter = () => {
    if (isInteractive) {
      setIsWinking(true);
      setTimeout(() => setIsWinking(false), 800);
    }
  };

  const renderKwamiGraphic = () => {
    switch (id) {
      case 'tikki':
        return (
          <g>
            {/* Aura */}
            <circle cx="100" cy="95" r="75" fill="url(#tikki-aura)" opacity="0.6" />
            {/* Antenas */}
            <motion.path
              d="M 90 40 Q 75 15 60 20"
              stroke="#ff1744"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              animate={isHovered ? { rotate: [-5, 5, -5] } : {}}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <circle cx="60" cy="20" r="4.5" fill="#ff1744" />
            <motion.path
              d="M 110 40 Q 125 15 140 20"
              stroke="#ff1744"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              animate={isHovered ? { rotate: [5, -5, 5] } : {}}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <circle cx="140" cy="20" r="4.5" fill="#ff1744" />

            {/* Cabeza Tikki */}
            <ellipse cx="100" cy="90" rx="55" ry="50" fill="#ff1744" filter="url(#drop-shadow)" />
            {/* Manchas negras icónicas de Ladybug */}
            <circle cx="100" cy="58" r="10" fill="#150508" />
            <circle cx="60" cy="92" r="7.5" fill="#150508" />
            <circle cx="140" cy="92" r="7.5" fill="#150508" />

            {/* Ojos grandes azul violeta */}
            <ellipse cx="80" cy="85" rx="14" ry={isWinking ? 2 : 18} fill="#1a237e" />
            <ellipse cx="120" cy="85" rx="14" ry="18" fill="#1a237e" />
            {!isWinking && (
              <>
                <ellipse cx="82" cy="83" rx="10" ry="14" fill="#3949ab" />
                <circle cx="78" cy="78" r="5" fill="#ffffff" />
                <circle cx="85" cy="90" r="2.5" fill="#ffffff" />
              </>
            )}
            <ellipse cx="118" cy="83" rx="10" ry="14" fill="#3949ab" />
            <circle cx="114" cy="78" r="5" fill="#ffffff" />
            <circle cx="121" cy="90" r="2.5" fill="#ffffff" />

            {/* Mejillas sonrosadas */}
            <circle cx="66" cy="104" r="8" fill="#ff8a80" opacity="0.65" />
            <circle cx="134" cy="104" r="8" fill="#ff8a80" opacity="0.65" />

            {/* Sonrisa dulce */}
            <path d="M 92 108 Q 100 117 108 108" stroke="#150508" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Cuerpo y patitas tiernas */}
            <path d="M 85 136 C 85 160 115 160 115 136 Z" fill="#d50000" />
            <ellipse cx="90" cy="162" rx="5" ry="4" fill="#d50000" />
            <ellipse cx="110" cy="162" rx="5" ry="4" fill="#d50000" />
          </g>
        );

      case 'plagg':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#plagg-aura)" opacity="0.6" />
            {/* Orejas de gato */}
            <polygon points="60,65 45,25 80,45" fill="#121212" stroke="#2a2a2a" strokeWidth="2" />
            <polygon points="62,60 50,32 75,47" fill="#4a148c" opacity="0.45" />
            <polygon points="140,65 155,25 120,45" fill="#121212" stroke="#2a2a2a" strokeWidth="2" />
            <polygon points="138,60 150,32 125,47" fill="#4a148c" opacity="0.45" />

            {/* Bigotes/Antenas */}
            <path d="M 90 35 Q 85 10 75 8" stroke="#1c1c1c" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 110 35 Q 115 10 125 8" stroke="#1c1c1c" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Cabeza Plagg */}
            <ellipse cx="100" cy="90" rx="52" ry="48" fill="#121212" filter="url(#drop-shadow)" />

            {/* Ojos verde radioactivo de gato */}
            <ellipse cx="78" cy="85" rx="16" ry={isWinking ? 2 : 16} fill="#00e676" />
            <ellipse cx="122" cy="85" rx="16" ry="16" fill="#00e676" />
            {!isWinking && (
              <>
                <ellipse cx="78" cy="85" rx="4" ry="13" fill="#0a1a0d" />
                <circle cx="74" cy="80" r="3" fill="#ffffff" />
              </>
            )}
            <ellipse cx="122" cy="85" rx="4" ry="13" fill="#0a1a0d" />
            <circle cx="118" cy="80" r="3" fill="#ffffff" />

            {/* Sonrisa pícara con colmillo */}
            <path d="M 90 108 Q 100 115 110 105" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <polygon points="94,109 97,114 99,109" fill="#ffffff" />

            {/* Cola larga oscilante */}
            <motion.path
              d="M 108 145 Q 145 155 155 125 Q 165 95 150 90"
              stroke="#121212"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              animate={{ rotate: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            />
            {/* Cuerpo */}
            <path d="M 88 134 C 88 156 112 156 112 134 Z" fill="#121212" />
          </g>
        );

      case 'trixx':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#trixx-aura)" opacity="0.6" />
            {/* Grandes orejas de zorro */}
            <polygon points="62,60 38,15 82,38" fill="#e65100" />
            <polygon points="60,56 46,25 78,40" fill="#ffffff" />
            <polygon points="138,60 162,15 118,38" fill="#e65100" />
            <polygon points="140,56 154,25 122,40" fill="#ffffff" />

            {/* Cola esponjosa con punta blanca */}
            <motion.path
              d="M 75 140 C 40 165 30 110 50 95 C 65 85 75 110 75 140 Z"
              fill="#ff6d00"
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            />
            <path d="M 38 120 C 30 110 50 95 55 100 Z" fill="#ffffff" />

            {/* Cabeza y mejillas de zorro */}
            <ellipse cx="100" cy="88" rx="50" ry="46" fill="#ff6d00" filter="url(#drop-shadow)" />
            {/* Hocico blanco */}
            <path d="M 75 92 Q 100 120 125 92 Q 100 102 75 92 Z" fill="#ffffff" />

            {/* Ojos violetas perspicaces */}
            <ellipse cx="78" cy="82" rx="14" ry={isWinking ? 2 : 16} fill="#4a148c" />
            <ellipse cx="122" cy="82" rx="14" ry="16" fill="#4a148c" />
            <ellipse cx="80" cy="80" rx="9" ry="12" fill="#7b1fa2" />
            <circle cx="76" cy="76" r="4.5" fill="#ffffff" />
            <ellipse cx="120" cy="80" rx="9" ry="12" fill="#7b1fa2" />
            <circle cx="116" cy="76" r="4.5" fill="#ffffff" />

            {/* Nariz y sonrisa astuta */}
            <circle cx="100" cy="98" r="3.5" fill="#212121" />
            <path d="M 94 105 Q 100 110 106 105" stroke="#212121" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Cuerpo */}
            <path d="M 88 132 C 88 155 112 155 112 132 Z" fill="#ff6d00" />
            <path d="M 93 133 Q 100 152 107 133 Z" fill="#ffffff" />
          </g>
        );

      case 'wayzz':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#wayzz-aura)" opacity="0.6" />
            {/* Caparazón de tortuga detrás */}
            <ellipse cx="100" cy="120" rx="42" ry="38" fill="#1b5e20" stroke="#00c853" strokeWidth="3" />
            <path d="M 85 110 L 100 98 L 115 110 L 110 128 L 90 128 Z" fill="#2e7d32" stroke="#81c784" strokeWidth="1.5" />

            {/* Antena única en la frente */}
            <path d="M 100 48 Q 100 24 108 20" stroke="#00c853" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="108" cy="20" r="5" fill="#69f0ae" />

            {/* Cabeza sabia Wayzz */}
            <ellipse cx="100" cy="86" rx="48" ry="44" fill="#00c853" filter="url(#drop-shadow)" />

            {/* Ojos bondadosos amarillo-verdosos */}
            <ellipse cx="80" cy="82" rx="13" ry={isWinking ? 2 : 14} fill="#fbc02d" />
            <ellipse cx="120" cy="82" rx="13" ry="14" fill="#fbc02d" />
            <ellipse cx="80" cy="82" rx="6" ry="10" fill="#1b5e20" />
            <circle cx="77" cy="78" r="3.5" fill="#ffffff" />
            <ellipse cx="120" cy="82" rx="6" ry="10" fill="#1b5e20" />
            <circle cx="117" cy="78" r="3.5" fill="#ffffff" />

            {/* Sonrisa serena */}
            <path d="M 90 102 Q 100 110 110 102" stroke="#004d40" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Patitas tranquilas */}
            <ellipse cx="78" cy="150" rx="7" ry="5" fill="#00c853" />
            <ellipse cx="122" cy="150" rx="7" ry="5" fill="#00c853" />
          </g>
        );

      case 'pollen':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#pollen-aura)" opacity="0.6" />
            {/* Alitas de abeja translúcidas */}
            <motion.ellipse
              cx="55"
              cy="70"
              rx="24"
              ry="14"
              fill="#ffffff"
              opacity="0.75"
              transform="rotate(-30 55 70)"
              animate={{ rotate: [-35, -25, -35] }}
              transition={{ repeat: Infinity, duration: 0.15 }}
            />
            <motion.ellipse
              cx="145"
              cy="70"
              rx="24"
              ry="14"
              fill="#ffffff"
              opacity="0.75"
              transform="rotate(30 145 70)"
              animate={{ rotate: [35, 25, 35] }}
              transition={{ repeat: Infinity, duration: 0.15 }}
            />

            {/* Antenas plumosas */}
            <path d="M 88 44 Q 70 20 62 25" stroke="#212121" strokeWidth="3" strokeLinecap="round" fill="none" />
            <ellipse cx="62" cy="25" rx="5" ry="3" fill="#ffd600" />
            <path d="M 112 44 Q 130 20 138 25" stroke="#212121" strokeWidth="3" strokeLinecap="round" fill="none" />
            <ellipse cx="138" cy="25" rx="5" ry="3" fill="#ffd600" />

            {/* Cabeza dorada de Pollen */}
            <ellipse cx="100" cy="88" rx="50" ry="46" fill="#ffd600" filter="url(#drop-shadow)" />
            {/* Rayas negras de terciopelo */}
            <path d="M 60 70 Q 100 80 140 70" stroke="#212121" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M 68 56 Q 100 64 132 56" stroke="#212121" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Ojos marrón dorado nobles */}
            <ellipse cx="80" cy="85" rx="14" ry={isWinking ? 2 : 16} fill="#4e342e" />
            <ellipse cx="120" cy="85" rx="14" ry="16" fill="#4e342e" />
            <ellipse cx="81" cy="84" rx="9" ry="12" fill="#795548" />
            <circle cx="77" cy="80" r="4" fill="#ffffff" />
            <ellipse cx="119" cy="84" rx="9" ry="12" fill="#795548" />
            <circle cx="115" cy="80" r="4" fill="#ffffff" />

            {/* Cuello esponjoso / collar real */}
            <ellipse cx="100" cy="130" rx="20" ry="8" fill="#ffffff" opacity="0.9" />

            {/* Sonrisa dulce */}
            <path d="M 93 105 Q 100 112 107 105" stroke="#212121" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Aguijón y cuerpo rayado */}
            <path d="M 90 134 C 90 156 110 156 110 134 Z" fill="#ffd600" />
            <polygon points="100,165 96,155 104,155" fill="#212121" />
          </g>
        );

      case 'sass':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#sass-aura)" opacity="0.6" />
            {/* Capucha de cobra */}
            <path d="M 52 90 Q 52 50 100 50 Q 148 50 148 90 Q 140 120 100 125 Q 60 120 52 90 Z" fill="#0077b6" />

            {/* Cabeza turquesa Sass */}
            <ellipse cx="100" cy="86" rx="45" ry="40" fill="#00b4d8" filter="url(#drop-shadow)" />

            {/* Ojos ámbar/rubí de serpiente */}
            <ellipse cx="80" cy="82" rx="13" ry={isWinking ? 2 : 14} fill="#e63946" />
            <ellipse cx="120" cy="82" rx="13" ry="14" fill="#e63946" />
            <ellipse cx="80" cy="82" rx="3.5" ry="11" fill="#1d3557" />
            <circle cx="77" cy="78" r="3" fill="#ffffff" />
            <ellipse cx="120" cy="82" rx="3.5" ry="11" fill="#1d3557" />
            <circle cx="117" cy="78" r="3" fill="#ffffff" />

            {/* Colmillos sutiles y sonrisa */}
            <path d="M 92 102 Q 100 108 108 102" stroke="#023e8a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <polygon points="94,103 96,108 97,103" fill="#ffffff" />
            <polygon points="103,103 104,108 106,103" fill="#ffffff" />

            {/* Cuerpo ondulante en S */}
            <motion.path
              d="M 100 124 Q 78 140 92 155 Q 115 168 125 152 Q 130 138 118 132"
              stroke="#00b4d8"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
          </g>
        );

      case 'kaalki':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#kaalki-aura)" opacity="0.6" />
            {/* Orejas de caballo */}
            <polygon points="68,55 58,22 84,38" fill="#5d4037" />
            <polygon points="67,50 62,28 80,40" fill="#d7ccc8" />
            <polygon points="132,55 142,22 116,38" fill="#5d4037" />
            <polygon points="133,50 138,28 120,40" fill="#d7ccc8" />

            {/* Crin elegante de caballo */}
            <path d="M 95 35 Q 100 18 112 28 Q 120 40 115 50" stroke="#795548" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Cabeza Kaalki */}
            <ellipse cx="100" cy="88" rx="48" ry="46" fill="#6d4c41" filter="url(#drop-shadow)" />
            {/* Hocico blanco suave */}
            <ellipse cx="100" cy="106" rx="22" ry="14" fill="#efebe9" />
            <ellipse cx="94" cy="105" rx="2" ry="3" fill="#4e342e" />
            <ellipse cx="106" cy="105" rx="2" ry="3" fill="#4e342e" />

            {/* Estrella blanca en la frente */}
            <polygon points="100,60 102,66 108,66 103,70 105,76 100,72 95,76 97,70 92,66 98,66" fill="#ffffff" />

            {/* Ojos avellana aristocráticos */}
            <ellipse cx="78" cy="80" rx="13" ry={isWinking ? 2 : 15} fill="#3e2723" />
            <ellipse cx="122" cy="80" rx="13" ry="15" fill="#3e2723" />
            <ellipse cx="79" cy="79" rx="8" ry="11" fill="#8d6e63" />
            <circle cx="75" cy="75" r="4" fill="#ffffff" />
            <ellipse cx="121" cy="79" rx="8" ry="11" fill="#8d6e63" />
            <circle cx="117" cy="75" r="4" fill="#ffffff" />

            {/* Sonrisa refinada */}
            <path d="M 94 114 Q 100 118 106 114" stroke="#4e342e" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        );

      case 'mullo':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#mullo-aura)" opacity="0.6" />
            {/* Grandes orejas redondas de ratón */}
            <circle cx="50" cy="50" r="32" fill="#cfd8dc" stroke="#b0bec5" strokeWidth="2" />
            <circle cx="50" cy="50" r="22" fill="#f8bbd0" />
            <circle cx="150" cy="50" r="32" fill="#cfd8dc" stroke="#b0bec5" strokeWidth="2" />
            <circle cx="150" cy="50" r="22" fill="#f8bbd0" />

            {/* Cola delgada y rizada */}
            <motion.path
              d="M 112 145 Q 150 160 160 135 Q 165 110 148 115"
              stroke="#f48fb1"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            {/* Cabeza gris perla Mullo */}
            <ellipse cx="100" cy="92" rx="46" ry="42" fill="#eceff1" filter="url(#drop-shadow)" />

            {/* Ojos negros inocentes con brillos */}
            <ellipse cx="80" cy="88" rx="13" ry={isWinking ? 2 : 15} fill="#263238" />
            <ellipse cx="120" cy="88" rx="13" ry="15" fill="#263238" />
            <circle cx="77" cy="83" r="4.5" fill="#ffffff" />
            <circle cx="83" cy="93" r="2" fill="#ffffff" />
            <circle cx="117" cy="83" r="4.5" fill="#ffffff" />
            <circle cx="123" cy="93" r="2" fill="#ffffff" />

            {/* Nariz rosa y mejillas sonrosadas */}
            <circle cx="68" cy="102" r="7" fill="#f48fb1" opacity="0.7" />
            <circle cx="132" cy="102" r="7" fill="#f48fb1" opacity="0.7" />
            <polygon points="100,99 97,95 103,95" fill="#ec407a" />
            <path d="M 94 104 Q 100 110 106 104" stroke="#455a64" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        );

      case 'xuppu':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#xuppu-aura)" opacity="0.6" />
            {/* Orejas de mono */}
            <circle cx="48" cy="88" r="16" fill="#e65100" />
            <circle cx="48" cy="88" r="10" fill="#ffe0b2" />
            <circle cx="152" cy="88" r="16" fill="#e65100" />
            <circle cx="152" cy="88" r="10" fill="#ffe0b2" />

            {/* Cola juguetona enrollada */}
            <motion.path
              d="M 110 142 Q 148 165 158 135 Q 165 105 145 110 Q 130 115 140 125"
              stroke="#e65100"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
            />

            {/* Cabeza Xuppu */}
            <ellipse cx="100" cy="88" rx="48" ry="44" fill="#ef6c00" filter="url(#drop-shadow)" />
            {/* Máscara de rostro melocotón */}
            <path d="M 70 85 C 70 65 90 70 100 80 C 110 70 130 65 130 85 C 130 115 70 115 70 85 Z" fill="#ffe0b2" />

            {/* Ojos pícaros y entusiastas */}
            <ellipse cx="82" cy="84" rx="11" ry={isWinking ? 2 : 13} fill="#4e342e" />
            <ellipse cx="118" cy="84" rx="11" ry="13" fill="#4e342e" />
            <circle cx="80" cy="80" r="3.5" fill="#ffffff" />
            <circle cx="116" cy="80" r="3.5" fill="#ffffff" />

            {/* Gran sonrisa de mono */}
            <path d="M 86 102 Q 100 116 114 102" stroke="#bf360c" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
        );

      case 'nooroo':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#nooroo-aura)" opacity="0.6" />
            {/* Alitas de mariposa lilas */}
            <motion.path
              d="M 70 90 C 20 60 20 120 70 110 Z"
              fill="#e1bee7"
              opacity="0.8"
              animate={{ scaleX: [1, 0.85, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
            <motion.path
              d="M 130 90 C 180 60 180 120 130 110 Z"
              fill="#e1bee7"
              opacity="0.8"
              animate={{ scaleX: [1, 0.85, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />

            {/* Antena en espiral de mariposa */}
            <path d="M 100 45 Q 100 20 112 24 Q 120 28 114 34" stroke="#ab47bc" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Cabeza Nooroo violeta suave */}
            <ellipse cx="100" cy="88" rx="46" ry="42" fill="#ce93d8" filter="url(#drop-shadow)" />

            {/* Ojos violeta profundo compasivos */}
            <ellipse cx="80" cy="84" rx="13" ry={isWinking ? 2 : 15} fill="#4a148c" />
            <ellipse cx="120" cy="84" rx="13" ry="15" fill="#4a148c" />
            <ellipse cx="80" cy="83" rx="8" ry="11" fill="#7b1fa2" />
            <circle cx="77" cy="79" r="4" fill="#ffffff" />
            <ellipse cx="120" cy="83" rx="8" ry="11" fill="#7b1fa2" />
            <circle cx="117" cy="79" r="4" fill="#ffffff" />

            {/* Sonrisa serena y tímida */}
            <path d="M 93 103 Q 100 108 107 103" stroke="#4a148c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        );

      case 'duusu':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#duusu-aura)" opacity="0.6" />
            {/* Abanico de plumas de pavo real */}
            <g opacity="0.9">
              <path d="M 60 130 C 40 90 30 110 50 135 Z" fill="#0288d1" />
              <circle cx="45" cy="115" r="5" fill="#ff4081" />
              <circle cx="45" cy="115" r="2.5" fill="#00e5ff" />

              <path d="M 140 130 C 160 90 170 110 150 135 Z" fill="#0288d1" />
              <circle cx="155" cy="115" r="5" fill="#ff4081" />
              <circle cx="155" cy="115" r="2.5" fill="#00e5ff" />
            </g>

            {/* Pluma de corona en la cabeza */}
            <path d="M 100 45 Q 100 20 106 18" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" fill="none" />
            <circle cx="106" cy="18" r="4" fill="#ff4081" />

            {/* Cabeza Duusu azul eléctrico */}
            <ellipse cx="100" cy="88" rx="46" ry="42" fill="#2979ff" filter="url(#drop-shadow)" />

            {/* Ojos expresivos y lágrima joya */}
            <ellipse cx="80" cy="84" rx="14" ry={isWinking ? 2 : 16} fill="#0d47a1" />
            <ellipse cx="120" cy="84" rx="14" ry="16" fill="#0d47a1" />
            <ellipse cx="80" cy="83" rx="9" ry="12" fill="#00e5ff" />
            <circle cx="77" cy="79" r="4" fill="#ffffff" />
            <ellipse cx="120" cy="83" rx="9" ry="12" fill="#00e5ff" />
            <circle cx="117" cy="79" r="4" fill="#ffffff" />

            {/* Marca de lágrima de sentimiento */}
            <path d="M 80 102 C 78 108 82 108 80 102 Z" fill="#ff4081" />

            {/* Sonrisa emotiva */}
            <path d="M 94 104 Q 100 110 106 104" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        );

      case 'longg':
        return (
          <g>
            <circle cx="100" cy="95" r="75" fill="url(#longg-aura)" opacity="0.6" />
            {/* Cuernos dorados de dragón */}
            <path d="M 72 45 Q 55 15 42 22" stroke="#ffd700" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M 128 45 Q 145 15 158 22" stroke="#ffd700" strokeWidth="5" strokeLinecap="round" fill="none" />

            {/* Bigotes de dragón oriental */}
            <motion.path
              d="M 76 96 Q 50 105 40 120"
              stroke="#ffd700"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.path
              d="M 124 96 Q 150 105 160 120"
              stroke="#ffd700"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              animate={{ rotate: [3, -3, 3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            {/* Cabeza Longg roja imperial */}
            <ellipse cx="100" cy="86" rx="48" ry="42" fill="#d50000" filter="url(#drop-shadow)" />

            {/* Marcas de rayo negras */}
            <polygon points="100,52 97,64 103,64" fill="#212121" />

            {/* Ojos dorados legendarios */}
            <ellipse cx="80" cy="82" rx="14" ry={isWinking ? 2 : 14} fill="#ffd600" />
            <ellipse cx="120" cy="82" rx="14" ry="14" fill="#ffd600" />
            <ellipse cx="80" cy="82" rx="4" ry="11" fill="#b71c1c" />
            <circle cx="77" cy="78" r="3.5" fill="#ffffff" />
            <ellipse cx="120" cy="82" rx="4" ry="11" fill="#b71c1c" />
            <circle cx="117" cy="78" r="3.5" fill="#ffffff" />

            {/* Sonrisa digna */}
            <path d="M 92 102 Q 100 108 108 102" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="kwami-avatar-wrapper"
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
      animate={{
        y: [0, -7, 0],
        rotate: [-1.2, 1.2, -1.2],
        scale: isHovered ? 1.08 : 1
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: floatDuration,
          delay: floatDelay,
          ease: 'easeInOut'
        },
        rotate: {
          repeat: Infinity,
          duration: floatDuration * 1.3,
          delay: floatDelay,
          ease: 'easeInOut'
        },
        scale: {
          duration: 0.35,
          ease: 'easeOut'
        }
      }}
      onPointerEnter={handlePointerEnter}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        style={{
          filter: `drop-shadow(0 0 ${isHovered ? '24px' : '14px'} ${glowColor})`,
          overflow: 'visible'
        }}
      >
        <defs>
          <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
          </filter>

          {/* Gradientes de Auras para cada Kwami */}
          <radialGradient id="tikki-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff1744" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff1744" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="plagg-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00e676" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00e676" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="trixx-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6d00" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff6d00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wayzz-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00c853" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00c853" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pollen-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd600" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffd600" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sass-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00b4d8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="kaalki-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b388ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#b388ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mullo-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f48fb1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f48fb1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="xuppu-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff9800" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff9800" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nooroo-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ce93d8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ce93d8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="duusu-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2979ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2979ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="longg-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d50000" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d50000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {renderKwamiGraphic()}
      </svg>
    </motion.div>
  );
};
