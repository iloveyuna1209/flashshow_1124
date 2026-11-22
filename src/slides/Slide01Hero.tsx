import { motion } from 'framer-motion';
import { DioramaImage } from '../components/DioramaImage';

export function Slide01Hero() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between px-12 py-12">
      {/* Top minimal kicker */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass-pill relative overflow-hidden rounded-full px-5 py-1.5 text-xs tracking-[0.26em] text-slate-300 uppercase"
      >
        11/24 閃電秀 ・ AI 不正經冷知識
      </motion.div>

      {/* Center 3D Museum Showcase (ONLY 3 domes: Planet / Book / Atomic Cube) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-[58vh] w-full max-w-5xl items-center justify-center"
      >
        <DioramaImage
          src="./assets/hero-museum.jpg"
          alt="三大陣營微縮玻璃展台"
          accent="#60A5FA"
          wide
          float
          className="h-full w-full"
        />

        {/* Subtle three-world floating labels aligned under the 3 domes */}
        <div className="pointer-events-none absolute bottom-2 flex w-[68%] items-center justify-between text-center">
          {[
            { label: '宇宙星體', sub: 'OpenAI', color: '#60A5FA', delay: 0.45 },
            { label: '古典文學', sub: 'Anthropic', color: '#E5B87A', delay: 0.6 },
            { label: '化學元素', sub: 'Google', color: '#22D3EE', delay: 0.75 },
          ].map((item) => (
            <motion.div
              key={item.sub}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.6 }}
              className="glass-pill rounded-full px-4 py-1"
            >
              <span className="text-xs font-medium tracking-wider" style={{ color: item.color }}>
                {item.sub}
              </span>
              <span className="mx-1.5 text-slate-500">·</span>
              <span className="text-xs text-slate-300">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Title Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
          大模型取名冷知識
        </h1>
        <p className="mt-3 text-base tracking-[0.14em] text-slate-400">
          從各大模型來看名字背後的意涵
        </p>
      </motion.div>
    </div>
  );
}
