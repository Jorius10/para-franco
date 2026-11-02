import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MiraculousParticles } from './components/MiraculousParticles';
import { Header } from './components/Header';
import { KwamiCard } from './components/KwamiCard';
import { KwamiModal } from './components/KwamiModal';
import { FinalSurpriseModal } from './components/FinalSurpriseModal';
import { KWAMIS_DATA } from './data/kwamisData';
import { sounds } from './utils/soundEffects';

export function App() {
  const [selectedKwami, setSelectedKwami] = useState(null);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Inicializar Kwamis descubiertos desde localStorage para persistencia
  const [discoveredKwamis, setDiscoveredKwamis] = useState(() => {
    try {
      const saved = localStorage.getItem('miraculous_discovered_kwamis');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('miraculous_discovered_kwamis', JSON.stringify(discoveredKwamis));
    } catch {
      // ignore
    }
  }, [discoveredKwamis]);

  const handleSelectKwami = (kwami) => {
    setSelectedKwami(kwami);
    if (!discoveredKwamis.includes(kwami.id)) {
      setDiscoveredKwamis((prev) => [...prev, kwami.id]);
    }
  };

  const handleCloseModal = () => {
    setSelectedKwami(null);
  };

  // Navegación hacia el siguiente Kwami
  const handleNextKwami = () => {
    if (!selectedKwami) return;
    const currentIndex = KWAMIS_DATA.findIndex((k) => k.id === selectedKwami.id);
    const nextIndex = (currentIndex + 1) % KWAMIS_DATA.length;
    const nextKwami = KWAMIS_DATA[nextIndex];
    handleSelectKwami(nextKwami);
  };

  // Navegación hacia el Kwami anterior
  const handlePrevKwami = () => {
    if (!selectedKwami) return;
    const currentIndex = KWAMIS_DATA.findIndex((k) => k.id === selectedKwami.id);
    const prevIndex = (currentIndex - 1 + KWAMIS_DATA.length) % KWAMIS_DATA.length;
    const prevKwami = KWAMIS_DATA[prevIndex];
    handleSelectKwami(prevKwami);
  };

  const handleToggleSound = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
  };

  const handleOpenSurprise = () => {
    sounds.playFinale();
    setIsSurpriseOpen(true);
  };

  const handleDiscoverAll = () => {
    sounds.playSparkle();
    const allIds = KWAMIS_DATA.map((k) => k.id);
    setDiscoveredKwamis(allIds);
  };

  const currentModalIndex = selectedKwami
    ? KWAMIS_DATA.findIndex((k) => k.id === selectedKwami.id)
    : 0;

  return (
    <div className="miraculous-app-root">
      {/* Canvas de destellos y partículas mágicas */}
      <MiraculousParticles />

      {/* Fondos degradados atmosféricos (rojo Ladybug y violeta Miraculous) */}
      <div className="ambient-background-glow glow-top-left" />
      <div className="ambient-background-glow glow-center-right" />
      <div className="ambient-background-glow glow-bottom" />

      <main className="miraculous-main-container">
        {/* Cabecera con título, instrucciones, barra de progreso y botón de sorpresa */}
        <Header
          discoveredCount={discoveredKwamis.length}
          totalKwamis={KWAMIS_DATA.length}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onOpenSurprise={handleOpenSurprise}
          onDiscoverAll={handleDiscoverAll}
        />

        {/* Cuadrícula interactiva de los 12 Kwamis */}
        <section className="kwamis-grid-section" aria-label="Galería de Kwamis interactivos">
          <div className="kwamis-grid">
            {KWAMIS_DATA.map((kwami, index) => (
              <KwamiCard
                key={kwami.id}
                kwami={kwami}
                index={index}
                isDiscovered={discoveredKwamis.includes(kwami.id)}
                onSelect={handleSelectKwami}
              />
            ))}
          </div>
        </section>

        {/* Pie de página con tributo a la amistad y Miraculous */}
        <footer className="miraculous-footer">
          <p className="footer-message">
            Creado con amor, magia y la bendición de los Kwamis 🐞✨🐾
          </p>
          <p className="footer-disclaimer">
            Inspirado en el universo de <em>Miraculous: Las Aventuras de Ladybug y Cat Noir</em>
          </p>
        </footer>
      </main>

      {/* Modal individual del Kwami seleccionado */}
      <KwamiModal
        kwami={selectedKwami}
        isOpen={Boolean(selectedKwami)}
        onClose={handleCloseModal}
        onNextKwami={handleNextKwami}
        onPrevKwami={handlePrevKwami}
        currentIndex={currentModalIndex}
        totalKwamis={KWAMIS_DATA.length}
      />

      {/* Modal de la Sorpresa Final con todos los Kwamis reunidos */}
      <FinalSurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
      />
    </div>
  );
}

export default App;
