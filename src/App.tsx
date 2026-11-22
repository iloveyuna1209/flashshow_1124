import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ThemeId } from './data/models';
import { AmbientBackdrop } from './components/AmbientBackdrop';
import { Slide01Hero } from './slides/Slide01Hero';
import { Slide02Motivation } from './slides/Slide02Motivation';
import { Slide03Overview } from './slides/Slide03Overview';
import { Slide04OpenAI } from './slides/Slide04OpenAI';
import { Slide05Anthropic1 } from './slides/Slide05Anthropic1';
import { Slide06Anthropic2 } from './slides/Slide06Anthropic2';
import { Slide07Google1 } from './slides/Slide07Google1';
import { Slide08Google2 } from './slides/Slide08Google2';
import { Slide09CrossLink } from './slides/Slide09CrossLink';
import { Slide10TheoryOpenAI } from './slides/Slide10TheoryOpenAI';
import { Slide11TheoryAnthropic } from './slides/Slide11TheoryAnthropic';
import { Slide12TheoryGoogle } from './slides/Slide12TheoryGoogle';
import { Slide13Perfume } from './slides/Slide13Perfume';
import { Slide14Outro } from './slides/Slide14Outro';

interface SlideConfig {
  id: number;
  theme: ThemeId;
  maxStep: number;
  render: (step: number) => React.ReactNode;
}

const SLIDES: SlideConfig[] = [
  { id: 1, theme: 'museum', maxStep: 0, render: () => <Slide01Hero /> },
  { id: 2, theme: 'museum', maxStep: 1, render: (s) => <Slide02Motivation step={s} /> },
  { id: 3, theme: 'museum', maxStep: 3, render: (s) => <Slide03Overview step={s} /> },
  { id: 4, theme: 'openai', maxStep: 3, render: (s) => <Slide04OpenAI step={s} /> },
  { id: 5, theme: 'anthropic', maxStep: 2, render: (s) => <Slide05Anthropic1 step={s} /> },
  { id: 6, theme: 'anthropic', maxStep: 1, render: (s) => <Slide06Anthropic2 step={s} /> },
  { id: 7, theme: 'google', maxStep: 1, render: (s) => <Slide07Google1 step={s} /> },
  { id: 8, theme: 'google', maxStep: 1, render: (s) => <Slide08Google2 step={s} /> },
  { id: 9, theme: 'museum', maxStep: 4, render: (s) => <Slide09CrossLink step={s} /> },
  { id: 10, theme: 'openai', maxStep: 1, render: (s) => <Slide10TheoryOpenAI step={s} /> },
  { id: 11, theme: 'anthropic', maxStep: 1, render: (s) => <Slide11TheoryAnthropic step={s} /> },
  { id: 12, theme: 'google', maxStep: 1, render: (s) => <Slide12TheoryGoogle step={s} /> },
  { id: 13, theme: 'perfume', maxStep: 3, render: (s) => <Slide13Perfume step={s} /> },
  { id: 14, theme: 'perfume', maxStep: 0, render: () => <Slide14Outro /> },
];

export default function App() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentSlide = SLIDES[slideIdx];

  const next = useCallback(() => {
    if (step < currentSlide.maxStep) {
      setStep((s) => s + 1);
    } else if (slideIdx < SLIDES.length - 1) {
      setDirection(1);
      setSlideIdx((i) => i + 1);
      setStep(0);
    }
  }, [step, currentSlide.maxStep, slideIdx]);

  const prev = useCallback(() => {
    if (step > 0) {
      setStep((s) => s - 1);
    } else if (slideIdx > 0) {
      const prevIdx = slideIdx - 1;
      setDirection(-1);
      setSlideIdx(prevIdx);
      setStep(SLIDES[prevIdx].maxStep);
    }
  }, [step, slideIdx]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Home') {
        setDirection(-1);
        setSlideIdx(0);
        setStep(0);
      } else if (e.key === 'End') {
        setDirection(1);
        setSlideIdx(SLIDES.length - 1);
        setStep(SLIDES[SLIDES.length - 1].maxStep);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [next, prev, toggleFullscreen]);

  const progress = ((slideIdx + (step + 1) / (currentSlide.maxStep + 1)) / SLIDES.length) * 100;

  return (
    <div
      onClick={next}
      onContextMenu={(e) => {
        e.preventDefault();
        prev();
      }}
      className="relative h-screen w-screen cursor-pointer overflow-hidden bg-[#070B14]"
    >
      <AmbientBackdrop theme={currentSlide.theme} />

      {/* Main Slide Canvas */}
      <main className="relative z-10 h-full w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 44 : -44, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: direction > 0 ? -44 : 44, filter: 'blur(6px)' }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            {currentSlide.render(step)}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Ultra-minimal unobtrusive bottom progress bar + page indicator */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between px-6 pb-2.5 text-[11px] font-mono-tech text-slate-500/80">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: currentSlide.maxStep + 1 }).map((_, idx) => (
              <span
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx <= step ? 'w-4 bg-white/60' : 'w-1.5 bg-white/15'
                }`}
              />
            ))}
          </div>
          <span>
            {String(slideIdx + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
        <div className="h-[2px] w-full bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 via-amber-300 to-cyan-300"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
}
