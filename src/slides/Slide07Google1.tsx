import { motion } from 'framer-motion';
import { GOOGLE_MODELS } from '../data/models';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number; // 0: Hydrogen, 1: Neon vs Argon noble gas comparison
}

const MINI_PERIODIC = [
  { sym: 'H', num: 1, activeStep: 0, color: '#67E8F9' },
  { sym: 'C', num: 6, activeStep: 99, color: '#34D399' },
  { sym: 'Ne', num: 10, activeStep: 1, color: '#F472B6' },
  { sym: 'Ar', num: 18, activeStep: 1, color: '#818CF8' },
];

export function Slide07Google1({ step }: Props) {
  const hydrogen = GOOGLE_MODELS[0];
  const neon = GOOGLE_MODELS[1];
  const argon = GOOGLE_MODELS[2];
  const showNoble = step >= 1;

  return (
    <div className="relative flex h-full w-full flex-col justify-between px-12 py-10">
      {/* Header + Mini Periodic Table Highlight Strip */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-cyan-300/80 uppercase">
            GOOGLE ・ GEMINI 4 SERIES
          </p>
          <h2 className="mt-1 text-4xl font-bold text-white">
            化學元素：最輕的氫，與最穩的惰性氣體
          </h2>
        </div>

        {/* Mini Periodic Table Badges */}
        <div className="flex items-center gap-2.5">
          {MINI_PERIODIC.map((el) => {
            const isLit = step >= el.activeStep;
            return (
              <motion.div
                key={el.sym}
                animate={{
                  opacity: isLit ? 1 : 0.25,
                  scale: isLit ? 1.05 : 0.95,
                }}
                className="glass-panel flex h-14 w-14 flex-col items-center justify-center rounded-xl"
                style={{
                  borderColor: isLit ? `${el.color}88` : 'rgba(255,255,255,0.1)',
                  boxShadow: isLit ? `0 0 20px ${el.color}33` : 'none',
                }}
              >
                <span className="font-mono-tech text-[10px] text-slate-400">#{el.num}</span>
                <span className="font-mono-tech text-lg font-bold" style={{ color: el.color }}>
                  {el.sym}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main Stage */}
      <div className="my-3 grid flex-1 grid-cols-[1fr_1.9fr] items-center gap-7">
        {/* Left: Hydrogen #1 */}
        <motion.div
          animate={{
            opacity: showNoble ? 0.65 : 1,
            scale: showNoble ? 0.96 : 1.02,
          }}
          transition={{ duration: 0.55 }}
          className="glass-panel relative flex h-[430px] flex-col items-center justify-between rounded-3xl p-6"
          style={{ borderColor: 'rgba(103,232,249,0.45)' }}
        >
          <div className="flex w-full items-center justify-between">
            <span className="font-mono-tech rounded-lg bg-cyan-400/15 px-2.5 py-1 text-xs font-bold text-cyan-300">
              #1 H
            </span>
            <span className="text-xs text-cyan-200/80">全宇宙最輕・結構最單純</span>
          </div>

          <DioramaImage
            src={hydrogen.asset}
            alt="Hydrogen"
            accent={hydrogen.accent}
            float
            className="h-60 w-60"
          />

          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              Hydrogen <span className="text-base font-normal text-cyan-300">氫</span>
            </div>
            <p className="mt-1 text-xs text-slate-300">體積最小・反應極速</p>
          </div>
        </motion.div>

        {/* Right: Noble Gas Twins — Neon (#10) vs Argon (#18) */}
        <motion.div
          initial={false}
          animate={{
            opacity: showNoble ? 1 : 0.12,
            y: showNoble ? 0 : 24,
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative flex h-[430px] flex-col justify-between overflow-hidden rounded-3xl p-6"
          style={{
            borderColor: showNoble ? 'rgba(168,85,247,0.48)' : 'rgba(255,255,255,0.08)',
          }}
        >
          {/* Shared Noble Gas Shield Header */}
          <div className="z-10 flex items-center justify-center">
            <div className="flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/15 px-4 py-1 text-xs font-medium text-purple-200">
              <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_10px_#C084FC]" />
              同為「惰性氣體」＝ 極度穩定、最不容易產生幻覺
            </div>
          </div>

          {/* Side-by-side beam comparison */}
          <div className="relative z-10 grid flex-1 grid-cols-2 items-center gap-5 pt-2">
            {/* Neon #10 — Precision Spotlight */}
            <div className="relative flex h-full flex-col items-center justify-between rounded-2xl border border-pink-400/25 bg-pink-500/[0.04] p-4">
              {/* Narrow focused spotlight cone animation */}
              {showNoble && (
                <motion.div
                  animate={{ opacity: [0.25, 0.55, 0.25] }}
                  transition={{ duration: 2.6, repeat: Infinity }}
                  className="pointer-events-none absolute top-0 h-full w-24 bg-gradient-to-b from-pink-400/35 via-pink-500/10 to-transparent blur-md"
                />
              )}
              <span className="font-mono-tech self-start rounded-md bg-pink-400/20 px-2 py-0.5 text-[11px] font-bold text-pink-300">
                #10 Ne・霓虹燈
              </span>

              <DioramaImage
                src={neon.asset}
                alt="Neon"
                accent={neon.accent}
                float={showNoble}
                className="h-44 w-44 animate-neon-pulse"
              />

              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  Neon <span className="text-sm font-normal text-pink-300">氖</span>
                </div>
                <p className="mt-1 text-xs text-pink-100/90">特殊局部高光 → 細部任務專精</p>
              </div>
            </div>

            {/* Argon #18 — Full-Room Protective Illumination */}
            <div className="relative flex h-full flex-col items-center justify-between rounded-2xl border border-indigo-400/25 bg-indigo-500/[0.05] p-4">
              {/* Wide ambient protective glow */}
              {showNoble && (
                <motion.div
                  animate={{ scale: [0.95, 1.06, 0.95], opacity: [0.22, 0.42, 0.22] }}
                  transition={{ duration: 3.4, repeat: Infinity }}
                  className="pointer-events-none absolute inset-2 rounded-2xl bg-radial from-indigo-400/25 via-amber-200/10 to-transparent"
                />
              )}
              <span className="font-mono-tech self-start rounded-md bg-indigo-400/20 px-2 py-0.5 text-[11px] font-bold text-indigo-300">
                #18 Ar・白熾燈泡保護氣
              </span>

              <DioramaImage
                src={argon.asset}
                alt="Argon"
                accent={argon.accent}
                fallbackType="argon"
                float={showNoble}
                className="h-44 w-44"
              />

              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  Argon <span className="text-sm font-normal text-indigo-300">氬</span>
                </div>
                <p className="mt-1 text-xs text-indigo-100/90">常見全域防護 → 任務整體規劃</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
