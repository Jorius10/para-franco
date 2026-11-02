/**
 * Sistema de sonido procedural con Web Audio API
 * No requiere archivos externos, funciona 100% en el navegador de manera ultrarrápida.
 */

class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.hasUserInteracted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playSparkle() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [1046.5, 1318.5, 1567.98, 2093.0]; // C6, E6, G6, C7
    const randomNote = notes[Math.floor(Math.random() * notes.length)];

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(randomNote, now);
    osc.frequency.exponentialRampToValueAtTime(randomNote * 1.5, now + 0.18);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  playKwamiOpen() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const chord = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C5, E5, G5, C6, E6

    chord.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + index * 0.045);

      gain.gain.setValueAtTime(0.06, now + index * 0.045);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.045 + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + index * 0.045);
      osc.stop(now + index * 0.045 + 0.5);
    });
  }

  playFinale() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Miraculous heroic fanfare chord progression: Eb major -> Ab major -> Bb major -> Eb major
    const arpeggio = [
      { f: 311.13, t: 0 },    // Eb4
      { f: 392.00, t: 0.1 },  // G4
      { f: 466.16, t: 0.2 },  // Bb4
      { f: 622.25, t: 0.3 },  // Eb5
      { f: 783.99, t: 0.45 }, // G5
      { f: 932.33, t: 0.6 },  // Bb5
      { f: 1244.5, t: 0.8 },  // Eb6
    ];

    arpeggio.forEach(({ f, t }) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + t);

      gain.gain.setValueAtTime(0.08, now + t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + t);
      osc.stop(now + t + 0.85);
    });
  }
}

export const sounds = new SoundManager();
