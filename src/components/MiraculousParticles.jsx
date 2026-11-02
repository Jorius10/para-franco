import React, { useEffect, useRef } from 'react';

/**
 * MiraculousParticles: Canvas interactivo de partículas mágicas,
 * destellos estelares y motas de luz con los colores emblemáticos de Miraculous.
 */
export const MiraculousParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Paleta mágica de Miraculous: rojos ladybug, violetas mariposa, verdes plagg y destellos dorados
    const colors = [
      'rgba(255, 23, 68, 0.8)',   // Rojo Tikki
      'rgba(225, 29, 72, 0.6)',   // Carmesí Ladybug
      'rgba(192, 132, 252, 0.7)', // Violeta mágico
      'rgba(236, 72, 153, 0.6)',  // Rosa místico
      'rgba(250, 204, 21, 0.8)',  // Oro kwami
      'rgba(52, 211, 153, 0.5)',  // Esmeralda Plagg
      'rgba(255, 255, 255, 0.9)'  // Chispa pura
    ];

    const particleCount = Math.min(width > 768 ? 65 : 35, 80);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2, // Flotan suavemente hacia arriba
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
        isStar: Math.random() > 0.6
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Resetear cuando salen por la parte superior
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = 0.35 + Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.35;
        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        if (p.isStar) {
          // Destello en forma de estrella de 4 puntas
          ctx.translate(p.x, p.y);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          const starSize = p.radius * 2.8;
          ctx.moveTo(0, -starSize);
          ctx.quadraticCurveTo(0, 0, starSize, 0);
          ctx.quadraticCurveTo(0, 0, 0, starSize);
          ctx.quadraticCurveTo(0, 0, -starSize, 0);
          ctx.quadraticCurveTo(0, 0, 0, -starSize);
          ctx.fill();
        } else {
          // Mota circular luminosa con resplandor
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};
