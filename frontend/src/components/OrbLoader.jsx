import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrbLoader({ onComplete }) {
  const [stage, setStage] = useState('loading'); // 'loading' | 'revealing' | 'done'
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true);
      setStage('done');
      if (onComplete) onComplete();
      return;
    }

    // Check if intro has already played in this session
    const hasLoaded = sessionStorage.getItem('corevex_intro_shown');
    if (hasLoaded) {
      setStage('done');
      if (onComplete) onComplete();
      return;
    }

    // Stage 1: Display orb for 1.1s
    const timer1 = setTimeout(() => {
      setStage('revealing');
    }, 1100);

    // Stage 2: Finish panel split at 1.8s
    const timer2 = setTimeout(() => {
      setStage('done');
      sessionStorage.setItem('corevex_intro_shown', 'true');
      if (onComplete) onComplete();
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStage('done');
    sessionStorage.setItem('corevex_intro_shown', 'true');
    if (onComplete) onComplete();
  };

  if (stage === 'done') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
        {/* Top Split Panel */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: stage === 'revealing' ? '-100%' : 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 left-0 right-0 h-1/2 bg-[#05070e] border-b border-blue-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] pointer-events-auto"
        />

        {/* Bottom Split Panel */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: stage === 'revealing' ? '100%' : 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#05070e] border-t border-blue-500/20 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] pointer-events-auto"
        />

        {/* Center Luminous Orb & Brand Identity */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-auto">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: stage === 'revealing' ? 1.25 : [0.92, 1.05, 0.98],
              opacity: stage === 'revealing' ? 0 : 1
            }}
            transition={{
              scale: stage === 'revealing' ? { duration: 0.6 } : { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: stage === 'revealing' ? 0.4 : 0.6 }
            }}
            className="relative flex flex-col items-center"
          >
            {/* Luminous Glow Backdrop */}
            <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse pointer-events-none" />

            {/* Orb Image */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 filter drop-shadow-[0_0_40px_rgba(43,127,255,0.7)]">
              <img
                src="/assets/loader.png"
                alt="Corevex Orb"
                className="w-full h-full object-contain animate-spin-slow"
                style={{ animationDuration: '14s' }}
              />
            </div>

            {/* Brand Title and Subtle Status */}
            <div className="mt-6 flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl font-bold tracking-[0.25em] font-['Space_Grotesk'] text-white">
                COREVE<span className="text-blue-500">X</span>
              </span>
              <div className="mt-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                <span className="text-xs tracking-wider uppercase text-blue-400/80 font-mono">
                  Initializing Intelligent Systems
                </span>
              </div>
            </div>

            {/* Skip Option */}
            <button
              onClick={handleSkip}
              className="mt-6 text-xs text-white/40 hover:text-white transition-colors cursor-pointer pointer-events-auto px-4 py-1.5 rounded-full border border-white/10 hover:border-blue-500/40"
            >
              Skip Intro →
            </button>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
