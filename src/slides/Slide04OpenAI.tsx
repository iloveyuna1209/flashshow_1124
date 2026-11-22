import { motion } from 'framer-motion';
import { OPENAI_MODELS, TIERS } from '../data/models';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number; // 0..3 reveals Luna -> Terra -> Sol -> Astra with true scale progression
}

const SCALE_SIZES = [132, 174, 224, 272];

export function Slide04OpenAI({ step }: Props) {
  const activeIdx = Math.min(step, 3);
  const current = OPENAI_MODELS[activeIdx];

  return (
    <div className="relative flex h-full w-full flex-col justify-between px-12 py-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-blue-300/80 uppercase">
            OPENAI ・ GPT-6 SERIES
          </p>
          <h2 className="mt-1 text-4xl font-bold text-white">宇宙星體：從月亮拉遠到銀河</h2>
        </div>
        <div className="glass-pill rounded-full px-4 py-1.5 text-xs text-blue-200">
          尺度越大 ＝ 戰力越強
        </div>
      </div>

      {/* Cosmic Scale Track */}
      <div className="relative flex flex-1 items-center justify-center">
        {/* Background expanding orbital arc SVG */}
        <svg
          viewBox="0 0 1100 380"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="cosmicLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#FBBF24" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 80 210 Q 550 130 1020 190"
            fill="none"
            stroke="url(#cosmicLine)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            initial={{ pathLength: 0.25 }}
            animate={{ pathLength: (activeIdx + 1) / 4 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        {/* 4 Celestial Bodies scaling physically from small to grand */}
        <div className="relative z-10 flex w-full max-w-6xl items-center justify-between gap-4">
          {OPENAI_MODELS.map((m, idx) => {
            const revealed = idx <= activeIdx;
            const focused = idx === activeIdx;
            const size = SCALE_SIZES[idx];

            return (
              <motion.div
                key={m.id}
                initial={false}
                animate={{
                  opacity: revealed ? (focused ? 1 : 0.62) : 0.08,
                  scale: revealed ? (focused ? 1.08 : 0.92) : 0.72,
                  y: focused ? -12 : 0,
                }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  style={{ width: size, height: size }}
                  className="relative flex items-center justify-center"
                >
                  {/* Focus halo ring */}
                  {focused && (
                    <motion.div
                      layoutId="openai-focus-ring"
                      className="pointer-events-none absolute -inset-3 rounded-full border"
                      style={{
                        borderColor: `${m.accent}77`,
                        boxShadow: `0 0 42px ${m.accent}38`,
                      }}
                    />
                  )}
                  <DioramaImage
                    src={m.asset}
                    alt={m.name}
                    accent={m.accent}
                    float={focused}
                    fallbackType={
                      m.id === 'sol' ? 'sol' : m.id === 'astra' ? 'astra' : 'orb'
                    }
                    className="h-full w-full"
                  />
                </div>

                <div className="mt-4">
                  <span
                    className="font-mono-tech text-[11px] uppercase tracking-widest"
                    style={{ color: TIERS[idx].color }}
                  >
                    {TIERS[idx].label}
                  </span>
                  <div className="mt-0.5 text-2xl font-bold text-white">
                    {m.name}
                    <span className="ml-2 text-sm font-normal text-slate-400">{m.zh}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Minimal Bottom Focus Pill */}
      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-panel mx-auto flex items-center gap-4 rounded-full px-7 py-3"
        style={{ borderColor: `${current.accent}55` }}
      >
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: current.accent, boxShadow: `0 0 12px ${current.accent}` }}
        />
        <span className="text-base font-semibold text-white">
          {current.name}（{current.zh}）
        </span>
        <span className="text-slate-500">｜</span>
        <span className="text-sm text-slate-200">{current.tag}</span>
      </motion.div>
    </div>
  );
}
