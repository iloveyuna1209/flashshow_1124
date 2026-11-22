import { motion } from 'framer-motion';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number; // 0: AGI cosmology + physicist, 1: Blackhole punchline reveal
}

export function Slide10TheoryOpenAI({ step }: Props) {
  const showPunchline = step >= 1;

  return (
    <div className="relative flex h-full w-full items-center justify-between gap-10 px-14 py-12">
      {/* Left 60%: 3D Blackhole Observatory Diorama */}
      <div className="relative flex h-full flex-[1.25] items-center justify-center">
        {/* Subtle gravitational orbit rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute h-[430px] w-[430px] rounded-full border border-blue-400/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute h-[320px] w-[320px] rounded-full border border-dashed border-amber-300/25"
        />

        <DioramaImage
          src="./assets/theory-blackhole.jpg"
          alt="OpenAI 黑洞天文台微縮模型"
          accent="#60A5FA"
          float
          className="h-[460px] w-[540px]"
        />
      </div>

      {/* Right 40%: Minimal Visual Clues + Punchline */}
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-blue-300/80 uppercase">
            WHY THIS THEME ・ 01
          </p>
          <h2 className="mt-2 text-4xl font-bold text-white">
            OpenAI 為什麼選宇宙？
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="glass-panel rounded-2xl p-5">
            <div className="font-mono-tech text-xs text-blue-300">CLUE 01</div>
            <div className="mt-1 text-xl font-bold text-white">打造 AGI 的終極宇宙觀</div>
            <p className="mt-1 text-sm text-slate-400">期許模型能力持續突破銀河、超越星群</p>
          </div>

          <div className="glass-panel rounded-2xl p-5">
            <div className="font-mono-tech text-xs text-amber-300">CLUE 02</div>
            <div className="mt-1 text-xl font-bold text-white">2025 招攬黑洞物理學家</div>
            <p className="mt-1 text-sm text-slate-400">用 AI 加速數學與物理領域的新發現</p>
          </div>
        </div>

        {/* Punchline card */}
        <motion.div
          initial={false}
          animate={{
            opacity: showPunchline ? 1 : 0,
            y: showPunchline ? 0 : 18,
            scale: showPunchline ? 1 : 0.95,
          }}
          transition={{ type: 'spring', stiffness: 130, damping: 16 }}
          className="glass-panel relative overflow-hidden rounded-2xl border-amber-400/50 bg-gradient-to-r from-amber-500/15 via-blue-500/10 to-transparent p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono-tech text-[11px] tracking-widest text-amber-300">
                UNOFFICIAL PREDICTION
              </div>
              <div className="mt-1 text-2xl font-bold text-white">
                終極模型會叫 <span className="text-amber-300">Blackhole</span>？
              </div>
            </div>
            <div className="h-11 w-11 rounded-full bg-black shadow-[0_0_24px_#F59E0B,inset_0_0_10px_#60A5FA]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
