import { motion, AnimatePresence } from 'framer-motion';
import { PERFUMES, TIERS } from '../data/models';
import { DioramaImage } from '../components/DioramaImage';
import { PerfumeParticles } from '../components/PerfumeParticles';

interface Props {
  step: number;
  // 0: Cologne
  // 1: Toilette (restroom -> vanity flip joke!)
  // 2: Parfum & Extrait
  // 3: All 4 Canvas particle evaporation vs longevity comparison
}

export function Slide13Perfume({ step }: Props) {
  const particlesActive = step >= 3;

  const isVisible = (idx: number) => {
    if (idx === 0) return step >= 0;
    if (idx === 1) return step >= 1;
    return step >= 2;
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between px-12 py-9">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-amber-300/85 uppercase">
            IF IT WERE MY MODEL
          </p>
          <h2 className="mt-1 text-4xl font-bold text-white">
            如果我有自己的模型：用<span className="text-amber-300">香水濃度</span>來命名
          </h2>
        </div>

        <motion.div
          animate={{ opacity: particlesActive ? 1 : 0.45 }}
          className="glass-pill rounded-full border-amber-300/35 px-4 py-1.5 text-xs text-amber-200"
        >
          揮發快 ＝ 小模型快 ｜ 持香久 ＝ 大模型深思
        </motion.div>
      </div>

      {/* 4 Perfume Bottles + Live Canvas Particle Comparison */}
      <div className="my-5 grid flex-1 grid-cols-4 items-center gap-5">
        {PERFUMES.map((p, idx) => {
          const visible = isVisible(idx);

          return (
            <motion.div
              key={p.id}
              initial={false}
              animate={{
                opacity: visible ? 1 : 0.1,
                y: visible ? 0 : 24,
                scale: visible ? 1 : 0.94,
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              className="glass-panel relative flex h-full max-h-[540px] flex-col items-center justify-between overflow-hidden rounded-3xl px-4 pb-5 pt-4"
              style={{
                borderColor: visible ? `${p.color}55` : 'rgba(255,255,255,0.08)',
              }}
            >
              {/* Top: Dedicated Badge Slot (uniform across all 4 cards) + Live Canvas Particle Emitter */}
              <div className="relative flex h-[155px] w-full flex-col items-center justify-end">
                <div className="absolute top-0 z-20 flex h-7 items-center justify-center">
                  <AnimatePresence mode="wait">
                    {particlesActive ? (
                      <motion.span
                        key="particle-tag"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="font-mono-tech rounded-full border border-white/15 bg-black/60 px-3 py-0.5 text-[11px] font-semibold"
                        style={{ color: p.color }}
                      >
                        {idx === 0 && '⚡ 秒散極快'}
                        {idx === 1 && '✦ 輕盈適中'}
                        {idx === 2 && '◈ 濃郁留香'}
                        {idx === 3 && '◉ 極致深沉持久'}
                      </motion.span>
                    ) : (
                      <span
                        key="conc-tag"
                        className="font-mono-tech text-[11px] tracking-widest text-slate-400"
                      >
                        香精濃度 {p.concentration}
                      </span>
                    )}
                  </AnimatePresence>
                </div>

                <PerfumeParticles
                  active={particlesActive}
                  evapSpeed={p.evapSpeed}
                  longevity={p.longevity}
                  color={p.color}
                />
              </div>

              {/* 3D Perfume Flacon */}
              <DioramaImage
                src={p.asset}
                alt={p.name}
                accent={p.color}
                float={visible}
                fallbackType={
                  p.id === 'toilette'
                    ? 'toilette'
                    : p.id === 'parfum'
                      ? 'parfum'
                      : p.id === 'extrait'
                        ? 'extrait'
                        : 'orb'
                }
                className="-mt-4 h-52 w-44"
              />

              {/* Concentration bar + text */}
              <div className="w-full text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-literary text-2xl font-bold text-white">{p.name}</span>
                  <span className="text-xs text-amber-200/80">{p.zh}</span>
                </div>

                {/* Concentration bar */}
                <div className="mx-auto mt-2 h-1.5 w-36 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: visible ? `${p.concentrationPct}%` : 0 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                </div>

                <p className="mt-2 text-[11px] text-slate-300/85">{p.origin}</p>

                {/* Corresponding Tier Badge linking back to the 3 AI giants */}
                <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 text-[11px]">
                  <span
                    className="font-mono-tech font-bold"
                    style={{ color: TIERS[idx].color }}
                  >
                    {TIERS[idx].short}
                  </span>
                  <span className="text-slate-200">{p.metaphor}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Axis Bar */}
      <div className="flex items-center justify-between px-4 text-xs tracking-widest text-amber-200/70">
        <span>低濃度・快揮發（小而快）</span>
        <div className="mx-6 h-px flex-1 bg-gradient-to-r from-sky-300/60 via-amber-300/75 to-orange-500" />
        <span>高濃度・久持香（大而深）</span>
      </div>
    </div>
  );
}
