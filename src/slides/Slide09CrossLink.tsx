import { motion } from 'framer-motion';
import {
  TIERS,
  OPENAI_MODELS,
  ANTHROPIC_MODELS,
  GOOGLE_MODELS,
} from '../data/models';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number; // 0..3 highlights one horizontal equivalence row at a time (4 shows all glowing)
}

export function Slide09CrossLink({ step }: Props) {
  const showAll = step >= 4;

  return (
    <div className="relative flex h-full w-full flex-col justify-between px-12 py-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-slate-400 uppercase">
            CROSS-MODEL EQUIVALENCE
          </p>
          <h2 className="mt-1 text-3xl font-bold text-white">
            橫向關聯：同一戰力階梯，三種不同哲學
          </h2>
        </div>
        <div className="flex gap-3 text-xs">
          <span className="text-blue-300">OpenAI 宇宙</span>
          <span className="text-slate-600">↔</span>
          <span className="text-amber-300">Anthropic 文學</span>
          <span className="text-slate-600">↔</span>
          <span className="text-cyan-300">Google 元素</span>
        </div>
      </div>

      {/* 4 Horizontal Glowing Conduit Rows */}
      <div className="my-4 flex flex-1 flex-col justify-between gap-3.5">
        {TIERS.map((tier, rowIdx) => {
          const active = showAll || step === rowIdx;
          const passed = rowIdx < step;
          const openai = OPENAI_MODELS[rowIdx];
          const google = GOOGLE_MODELS[rowIdx];
          const anthropicPair =
            rowIdx === 3
              ? [ANTHROPIC_MODELS[3], ANTHROPIC_MODELS[4]]
              : [ANTHROPIC_MODELS[rowIdx]];

          return (
            <motion.div
              key={tier.short}
              animate={{
                opacity: active ? 1 : passed ? 0.45 : 0.16,
                scale: active && !showAll ? 1.018 : 1,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel relative grid flex-1 grid-cols-[150px_1fr_56px_1fr_56px_1fr] items-center rounded-2xl px-5"
              style={{
                borderColor: active ? `${tier.color}70` : 'rgba(255,255,255,0.08)',
                boxShadow: active ? `0 0 36px ${tier.color}20` : 'none',
              }}
            >
              {/* Tier badge */}
              <div className="flex flex-col">
                <span
                  className="font-mono-tech text-[11px] font-bold tracking-widest"
                  style={{ color: tier.color }}
                >
                  {tier.short}
                </span>
                <span className="text-base font-bold text-white">{tier.label}</span>
              </div>

              {/* OpenAI Node */}
              <div className="flex items-center gap-3">
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
                <div>
                  <div className="text-lg font-bold text-white">{openai.name}</div>
                  <div className="text-xs text-slate-400">{openai.zh}</div>
                </div>
              </div>

              {/* Animated Horizontal Energy Conduit 1 */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{
                    scaleX: active ? 1 : 0.3,
                    opacity: active ? 1 : 0.25,
                  }}
                  transition={{ duration: 0.5 }}
                  className="h-[2px] w-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, #60A5FA, ${tier.color}, #E5B87A)`,
                    boxShadow: active ? `0 0 12px ${tier.color}` : 'none',
                  }}
                />
              </div>

              {/* Anthropic Node */}
              <div className="flex items-center justify-center gap-3">
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
                <div>
                  <div className="font-literary text-lg font-bold text-amber-100">
                    {anthropicPair.map((m) => m.name).join(' / ')}
                  </div>
                  <div className="text-xs text-slate-400">
                    {anthropicPair.map((m) => m.zh).join(' · ')}
                  </div>
                </div>
              </div>

              {/* Animated Horizontal Energy Conduit 2 */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{
                    scaleX: active ? 1 : 0.3,
                    opacity: active ? 1 : 0.25,
                  }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  className="h-[2px] w-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, #E5B87A, ${tier.color}, #22D3EE)`,
                    boxShadow: active ? `0 0 12px ${tier.color}` : 'none',
                  }}
                />
              </div>

              {/* Google Node */}
              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{google.name}</div>
                  <div className="font-mono-tech text-xs text-cyan-300">
                    {google.zh} {google.atomicNo}
                  </div>
                </div>
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
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
