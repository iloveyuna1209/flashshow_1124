import { motion } from 'framer-motion';
import { GOOGLE_MODELS } from '../data/models';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number; // 0: Carbon reveal, 1: Graphite <-> Diamond + Organic Scaffold highlight
}

export function Slide08Google2({ step }: Props) {
  const carbon = GOOGLE_MODELS[3];
  const expanded = step >= 1;

  return (
    <div className="relative flex h-full w-full flex-col justify-between px-12 py-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-emerald-300/80 uppercase">
            GOOGLE ・ APEX ELEMENT #6
          </p>
          <h2 className="mt-1 text-4xl font-bold text-white">
            Carbon（碳）：萬物骨架與極致重組
          </h2>
        </div>
        <div className="font-mono-tech glass-panel flex h-14 w-14 flex-col items-center justify-center rounded-xl border-emerald-400/50">
          <span className="text-[10px] text-slate-400">#6</span>
          <span className="text-xl font-bold text-emerald-300">C</span>
        </div>
      </div>

      {/* Central Carbon Transformation Visual */}
      <div className="relative my-2 flex flex-1 items-center justify-center">
        {/* Expanding hexagonal organic molecular scaffold SVG */}
        <svg
          viewBox="0 0 920 420"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {/* Hexagonal lattice network radiating outward when step >= 1 */}
          <motion.g
            initial={{ opacity: 0.15, scale: 0.9 }}
            animate={{ opacity: expanded ? 0.65 : 0.18, scale: expanded ? 1 : 0.92 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: '460px 210px' }}
          >
            {[
              'M 460 70 L 580 140 L 580 280 L 460 350 L 340 280 L 340 140 Z',
              'M 220 140 L 340 140 L 340 280 L 220 280 L 160 210 Z',
              'M 580 140 L 700 140 L 760 210 L 700 280 L 580 280 Z',
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                fill="none"
                stroke="#34D399"
                strokeOpacity={i === 0 ? 0.65 : 0.35}
                strokeWidth={i === 0 ? 2 : 1.5}
                strokeDasharray={i === 0 ? 'none' : '6 6'}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: expanded ? 1 : 0.35 }}
                transition={{ duration: 1.1, delay: i * 0.12 }}
              />
            ))}
          </motion.g>
        </svg>

        {/* Left Side: Soft Graphite */}
        <motion.div
          animate={{
            opacity: expanded ? 1 : 0.2,
            x: expanded ? 0 : 40,
          }}
          transition={{ duration: 0.65 }}
          className="glass-panel z-10 w-64 rounded-3xl p-5 text-right"
          style={{ borderColor: 'rgba(148,163,184,0.35)' }}
        >
          <span className="font-mono-tech text-[11px] tracking-widest text-slate-400">
            ALLOTROPE A
          </span>
          <div className="mt-1 text-2xl font-bold text-slate-200">柔軟石墨</div>
          <div className="mt-2 flex justify-end gap-1.5">
            {[0, 1, 2].map((l) => (
              <span key={l} className="h-1.5 w-10 rounded-full bg-slate-400/70" />
            ))}
          </div>
          <p className="mt-2.5 text-xs text-slate-400">層狀滑動・靈活變形</p>
        </motion.div>

        {/* Center: 3D Carbon Diorama */}
        <motion.div
          animate={{ scale: expanded ? 1.06 : 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 mx-8 flex h-[340px] w-[340px] items-center justify-center"
        >
          <DioramaImage
            src={carbon.asset}
            alt="Carbon"
            accent="#34D399"
            fallbackType="carbon"
            float
            className="h-full w-full"
          />
        </motion.div>

        {/* Right Side: Hard Diamond */}
        <motion.div
          animate={{
            opacity: expanded ? 1 : 0.2,
            x: expanded ? 0 : -40,
          }}
          transition={{ duration: 0.65 }}
          className="glass-panel z-10 w-64 rounded-3xl p-5 text-left"
          style={{ borderColor: 'rgba(103,232,249,0.45)' }}
        >
          <span className="font-mono-tech text-[11px] tracking-widest text-cyan-300">
            ALLOTROPE B
          </span>
          <div className="mt-1 text-2xl font-bold text-cyan-100">堅硬鑽石</div>
          <div className="mt-2 flex gap-1.5">
            {[0, 1, 2].map((l) => (
              <span
                key={l}
                className="h-3 w-3 rotate-45 border border-cyan-300 bg-cyan-300/25"
              />
            ))}
          </div>
          <p className="mt-2.5 text-xs text-slate-300">極致硬度・高難度攻堅</p>
        </motion.div>
      </div>

      {/* Bottom Summary Pill */}
      <motion.div
        animate={{ opacity: expanded ? 1 : 0.55 }}
        className="glass-panel mx-auto flex items-center gap-4 rounded-full border-emerald-400/40 px-7 py-3"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34D399]" />
        <span className="text-sm font-medium text-emerald-100">
          地球所有有機生命的骨架 ＝ 處理多元複雜事務 ＋ 建立所有任務基礎支架
        </span>
      </motion.div>
    </div>
  );
}
