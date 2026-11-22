import { motion } from 'framer-motion';
import { DioramaImage } from '../components/DioramaImage';

const DOME_ITEMS = [
  { label: '宇宙星體', sub: 'OpenAI', asset: './assets/openai-terra.jpg', color: '#60A5FA' },
  { label: '古典文學', sub: 'Anthropic', asset: './assets/claude-opus.jpg', color: '#E5B87A' },
  { label: '化學元素', sub: 'Google', asset: './assets/gemini-neon.jpg', color: '#22D3EE' },
  { label: '香水濃度', sub: 'Mine', asset: './assets/perfume-cologne.jpg', color: '#F59E0B' },
];

export function Slide14Outro() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-pill rounded-full px-5 py-1.5 text-xs tracking-[0.26em] text-amber-200/90 uppercase"
      >
        YOUR TURN ・ 換你命名
      </motion.div>

      {/* Upgraded 5-Dome Glass Exhibition Pedestal (4 revealed worlds + 1 glowing empty '?' dome) */}
      <div className="relative flex w-full max-w-6xl flex-1 flex-col items-center justify-center">
        <div className="grid w-full grid-cols-5 items-end gap-5">
          {DOME_ITEMS.map((item, idx) => (
            <motion.div
              key={item.sub}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.65 }}
              className="flex flex-col items-center"
            >
              {/* Frosted Glass Dome */}
              <div
                className="glass-panel relative flex h-56 w-44 items-center justify-center overflow-hidden rounded-t-full rounded-b-2xl p-3"
                style={{
                  borderColor: `${item.color}44`,
                  boxShadow: `inset 0 2px 18px ${item.color}22, 0 18px 40px rgba(0,0,0,0.45)`,
                }}
              >
                <DioramaImage
                  src={item.asset}
                  alt={item.label}
                  accent={item.color}
                  float
                  className="h-36 w-36"
                />
              </div>
              <div className="mt-3 text-center">
                <div className="text-sm font-semibold text-white">{item.label}</div>
                <div className="font-mono-tech text-[11px]" style={{ color: item.color }}>
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}

          {/* 5th Dome: Glowing Empty Glass Dome with floating '?' */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.48, duration: 0.75 }}
            className="flex flex-col items-center"
          >
            <div
              className="glass-panel glass-shimmer relative flex h-64 w-48 items-center justify-center overflow-hidden rounded-t-full rounded-b-2xl"
              style={{
                borderColor: 'rgba(253, 230, 138, 0.7)',
                boxShadow:
                  '0 0 60px rgba(245,158,11,0.28), inset 0 2px 26px rgba(253,230,138,0.28)',
              }}
            >
              <motion.div
                animate={{ y: [-6, 6, -6], scale: [1, 1.07, 1] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                className="font-literary bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-8xl font-bold text-transparent drop-shadow-[0_0_24px_rgba(251,191,36,0.65)]"
              >
                ?
              </motion.div>
            </div>
            <div className="mt-3 text-center">
              <div className="text-sm font-bold text-amber-200">你的世界觀</div>
              <div className="font-mono-tech text-[11px] text-amber-400/80">NEXT</div>
            </div>
          </motion.div>
        </div>

        {/* Sleek glass exhibition floor bar */}
        <div className="mt-5 h-2 w-[92%] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px]" />
      </div>

      {/* Closing Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="text-center"
      >
        <h2 className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
          如果輪到你命名，你會怎麼取？
        </h2>
        <p className="mt-2 text-sm tracking-[0.2em] text-slate-400">
          Thanks for listening · 11/24 閃電秀
        </p>
      </motion.div>
    </div>
  );
}
