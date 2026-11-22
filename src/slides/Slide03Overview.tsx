import { motion } from 'framer-motion';
import {
  TIERS,
  COMPANIES,
  OPENAI_MODELS,
  ANTHROPIC_MODELS,
  GOOGLE_MODELS,
} from '../data/models';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number;
}

export function Slide03Overview({ step }: Props) {
  const showOpenAI = step >= 1;
  const showAnthropic = step >= 2;
  const showGoogle = step >= 3;

  const colVisible = [showOpenAI, showAnthropic, showGoogle];

  return (
    <div className="flex h-full w-full flex-col justify-between px-10 py-9">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs tracking-[0.26em] text-slate-400 uppercase">OVERVIEW MAP</p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-white">
            三大陣營命名圖鑑
          </h2>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="glass-pill rounded-full px-3 py-1">縱軸：戰力定位</span>
          <span className="glass-pill rounded-full px-3 py-1">橫軸：世界觀隱喻</span>
        </div>
      </div>

      {/* 4 x 3 Glass Museum Matrix */}
      <div className="my-4 grid flex-1 grid-cols-[170px_1fr_1fr_1fr] grid-rows-[56px_repeat(4,1fr)] gap-3">
        {/* Top-left corner */}
        <div className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-xs tracking-widest text-slate-500">
          戰力 ＼ 陣營
        </div>

        {/* Company Column Headers */}
        {COMPANIES.map((c, idx) => (
          <motion.div
            key={c.id}
            animate={{
              opacity: colVisible[idx] ? 1 : 0.25,
              y: colVisible[idx] ? 0 : 6,
            }}
            transition={{ duration: 0.5 }}
            className="glass-panel flex items-center justify-between rounded-2xl px-5"
            style={{
              borderColor: colVisible[idx] ? `${c.accent}55` : 'rgba(255,255,255,0.08)',
            }}
          >
            <div>
              <span className="text-base font-bold text-white">{c.name}</span>
              <span className="ml-2 text-xs text-slate-400">{c.series}</span>
            </div>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: `${c.accent}22`,
                color: c.accent,
              }}
            >
              {c.world}
            </span>
          </motion.div>
        ))}

        {/* 4 Tier Rows */}
        {TIERS.map((tier, rowIdx) => {
          const openai = OPENAI_MODELS[rowIdx];
          const google = GOOGLE_MODELS[rowIdx];
          const anthropicPair =
            rowIdx === 3
              ? [ANTHROPIC_MODELS[3], ANTHROPIC_MODELS[4]]
              : [ANTHROPIC_MODELS[rowIdx]];

          return (
            <div key={tier.short} className="contents">
              {/* Tier Axis Card */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIdx * 0.08, duration: 0.5 }}
                className="glass-panel flex flex-col justify-center rounded-2xl px-4"
                style={{ borderLeft: `3px solid ${tier.color}` }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono-tech text-[11px] font-bold"
                    style={{ color: tier.color }}
                  >
                    {tier.short}
                  </span>
                  <span className="text-sm font-bold text-white">{tier.label}</span>
                </div>
                <span className="mt-0.5 text-[11px] text-slate-400">{tier.sub}</span>
              </motion.div>

              {/* OpenAI Cell */}
              <motion.div
                animate={{
                  opacity: showOpenAI ? 1 : 0.08,
                  scale: showOpenAI ? 1 : 0.94,
                }}
                transition={{ duration: 0.45, delay: showOpenAI ? rowIdx * 0.06 : 0 }}
                className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-2"
              >
                <DioramaImage
                  src={openai.asset}
                  alt={openai.name}
                  accent={openai.accent}
                  fallbackType={
                    openai.id === 'sol'
                      ? 'sol'
                      : openai.id === 'astra'
                        ? 'astra'
                        : 'orb'
                  }
                  className="h-16 w-16 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-white">{openai.name}</span>
                    <span className="text-xs text-slate-400">{openai.zh}</span>
                  </div>
                  <div className="truncate text-[11px] text-slate-400">{openai.metaphor}</div>
                </div>
              </motion.div>

              {/* Anthropic Cell */}
              <motion.div
                animate={{
                  opacity: showAnthropic ? 1 : 0.08,
                  scale: showAnthropic ? 1 : 0.94,
                }}
                transition={{ duration: 0.45, delay: showAnthropic ? rowIdx * 0.06 : 0 }}
                className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-2"
              >
                <div className="flex shrink-0 -space-x-3">
                  {anthropicPair.map((m) => (
                    <DioramaImage
                      key={m.id}
                      src={m.asset}
                      alt={m.name}
                      accent={m.accent}
                      className={anthropicPair.length > 1 ? 'h-14 w-14' : 'h-16 w-16'}
                    />
                  ))}
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-literary text-lg font-bold text-amber-100">
                      {anthropicPair.map((m) => m.name).join(' / ')}
                    </span>
                  </div>
                  <div className="truncate text-[11px] text-slate-400">
                    {anthropicPair.map((m) => m.zh).join(' · ')}
                  </div>
                </div>
              </motion.div>

              {/* Google Cell */}
              <motion.div
                animate={{
                  opacity: showGoogle ? 1 : 0.08,
                  scale: showGoogle ? 1 : 0.94,
                }}
                transition={{ duration: 0.45, delay: showGoogle ? rowIdx * 0.06 : 0 }}
                className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-2"
              >
                <DioramaImage
                  src={google.asset}
                  alt={google.name}
                  accent={google.accent}
                  fallbackType={
                    google.id === 'argon'
                      ? 'argon'
                      : google.id === 'carbon'
                        ? 'carbon'
                        : 'orb'
                  }
                  className="h-16 w-16 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-white">{google.name}</span>
                    <span className="font-mono-tech text-xs text-cyan-300">
                      {google.zh} {google.atomicNo}
                    </span>
                  </div>
                  <div className="truncate text-[11px] text-slate-400">{google.metaphor}</div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
