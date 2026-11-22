import { motion } from 'framer-motion';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number; // 0: DeepMind science fields, 1: Chemical reaction collision animation
}

const SCIENCE_FIELDS = [
  { name: 'AlphaFold', sub: '蛋白質結構預測', color: '#22D3EE' },
  { name: 'AlphaGenome', sub: '基因組與疾病研究', color: '#A855F7' },
  { name: '氣象與材料', sub: '物理・化學探索', color: '#34D399' },
];

export function Slide12TheoryGoogle({ step }: Props) {
  const showReaction = step >= 1;

  return (
    <div className="relative flex h-full w-full items-center justify-between gap-10 px-14 py-12">
      {/* Left 60%: DeepMind Science Crystal Dome Diorama + Collision Ring */}
      <div className="relative flex h-full flex-[1.25] items-center justify-center">
        {/* Chemical reaction shockwave animation on Step 1 */}
        {showReaction && (
          <>
            <motion.div
              initial={{ scale: 0.4, opacity: 0.9 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              className="pointer-events-none absolute h-64 w-64 rounded-full border-2 border-cyan-300/60"
            />
            <motion.div
              initial={{ scale: 0.4, opacity: 0.8 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2.2, delay: 0.8, repeat: Infinity, ease: 'easeOut' }}
              className="pointer-events-none absolute h-64 w-64 rounded-full border-2 border-purple-400/55"
            />
          </>
        )}

        <DioramaImage
          src="./assets/theory-deepmind.jpg"
          alt="Google DeepMind 科學穹頂與元素碰撞"
          accent="#22D3EE"
          float
          className="h-[460px] w-[540px]"
        />
      </div>

      {/* Right 40%: Clues */}
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-cyan-300/80 uppercase">
            WHY THIS THEME ・ 03
          </p>
          <h2 className="mt-2 text-4xl font-bold text-white">
            Google 為什麼選化學元素？
          </h2>
        </div>

        {/* Science domains */}
        <div className="glass-panel rounded-2xl p-5">
          <div className="font-mono-tech text-xs text-cyan-300">CLUE 01 ・ DeepMind 科學底蘊</div>
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {SCIENCE_FIELDS.map((f) => (
              <div
                key={f.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center"
              >
                <div className="font-mono-tech text-xs font-bold" style={{ color: f.color }}>
                  {f.name}
                </div>
                <div className="mt-1 text-[11px] text-slate-400">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Element Collision -> Chemical Reaction */}
        <motion.div
          initial={false}
          animate={{
            opacity: showReaction ? 1 : 0.14,
            y: showReaction ? 0 : 18,
          }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-2xl border-cyan-400/45 bg-gradient-to-r from-cyan-500/12 via-purple-500/10 to-transparent p-5"
        >
          <div className="font-mono-tech text-xs text-purple-300">CLUE 02 ・ 協作隱喻</div>
          <div className="mt-1.5 flex items-center gap-3 text-xl font-bold text-white">
            <span className="font-mono-tech rounded-lg bg-cyan-400/20 px-2 py-0.5 text-sm text-cyan-200">
              H
            </span>
            <span className="text-slate-500">+</span>
            <span className="font-mono-tech rounded-lg bg-pink-400/20 px-2 py-0.5 text-sm text-pink-200">
              Ne
            </span>
            <span className="text-slate-500">+</span>
            <span className="font-mono-tech rounded-lg bg-emerald-400/20 px-2 py-0.5 text-sm text-emerald-200">
              C
            </span>
            <span className="text-cyan-300">→ 新物質</span>
          </div>
          <p className="mt-2 text-sm text-slate-300">
            期許各模型彼此搭配碰撞，產生意想不到的「化學反應」
          </p>
        </motion.div>
      </div>
    </div>
  );
}
