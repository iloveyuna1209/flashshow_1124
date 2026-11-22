import { motion } from 'framer-motion';

interface Props {
  step: number;
}

const CAPSULES = [
  { name: 'Hydrogen', group: 2, x: -340, y: -115, rot: -14, color: '#22D3EE' },
  { name: 'Neon', group: 2, x: 290, y: -108, rot: 12, color: '#F472B6' },
  { name: 'Argon', group: 2, x: -120, y: 135, rot: -9, color: '#818CF8' },
  { name: 'Carbon', group: 2, x: 165, y: 145, rot: 16, color: '#34D399' },
  { name: 'Luna', group: 0, x: -390, y: 35, rot: -18, color: '#CBD5E1' },
  { name: 'Terra', group: 0, x: 380, y: 25, rot: 11, color: '#60A5FA' },
  { name: 'Sol', group: 0, x: -95, y: -132, rot: 8, color: '#FBBF24' },
  { name: 'Astra', group: 0, x: 125, y: -128, rot: -12, color: '#A78BFA' },
  { name: 'Haiku', group: 1, x: -255, y: -45, rot: 15, color: '#FDA4AF' },
  { name: 'Sonnet', group: 1, x: 245, y: -38, rot: -10, color: '#E5B87A' },
  { name: 'Opus', group: 1, x: -245, y: 100, rot: 9, color: '#F59E0B' },
  { name: 'Mythos', group: 1, x: 280, y: 105, rot: -16, color: '#FB7185' },
];

const TRACKS = [
  { title: 'OpenAI', sub: '宇宙星體', color: '#60A5FA', colX: -320 },
  { title: 'Anthropic', sub: '文學創作', color: '#E5B87A', colX: 0 },
  { title: 'Google', sub: '化學元素', color: '#22D3EE', colX: 320 },
];

export function Slide02Motivation({ step }: Props) {
  const organized = step >= 1;

  // Compute neatly aligned position per group when organized
  const groupCounts = [0, 0, 0];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between px-12 py-12">
      {/* Header */}
      <motion.div
        key={organized ? 'org' : 'chaos'}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="z-20 text-center"
      >
        <p className="text-xs font-medium tracking-[0.28em] text-cyan-300/80 uppercase">
          {organized ? '整理之後才發現' : '發想動機'}
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">
          {organized
            ? '原來每家都在寫自己的世界觀'
            : '最近模型出了好多很奇妙的名字，記的讓人暈頭轉向'}
        </h2>
      </motion.div>

      {/* Visual stage: Chaos capsules morph smoothly into 3 luminous columns */}
      <div className="relative flex h-[62vh] w-full max-w-6xl items-center justify-center">
        {/* Background subtle image if available */}
        <motion.img
          src="./assets/chaos-capsules.jpg"
          alt=""
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
          animate={{ opacity: organized ? 0.08 : 0.35, scale: organized ? 1.08 : 1 }}
          transition={{ duration: 0.9 }}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover diorama-blend-wide"
        />

        {/* Center "AI 焦慮" pulse core when chaotic */}
        <motion.div
          animate={{
            opacity: organized ? 0 : 1,
            scale: organized ? 0.6 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="glass-panel pointer-events-none z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border-cyan-400/30 text-center"
        >
          <span className="font-mono-tech text-xs tracking-widest text-cyan-300">GEMINI 4</span>
          <span className="mt-1 text-2xl font-bold text-white">命名大爆炸</span>
          <span className="mt-1 text-[11px] text-slate-400">H · Ne · Ar · C ...</span>
        </motion.div>

        {/* Three glowing glass rails appear on Step 1 */}
        {TRACKS.map((t, idx) => (
          <motion.div
            key={t.title}
            initial={false}
            animate={{
              opacity: organized ? 1 : 0,
              scaleY: organized ? 1 : 0.6,
              y: organized ? 0 : 30,
            }}
            transition={{ duration: 0.7, delay: organized ? idx * 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}
            style={{
              left: '50%',
              marginLeft: t.colX - 125,
              borderColor: `${t.color}38`,
            }}
            className="glass-panel pointer-events-none absolute top-4 flex h-[92%] w-[250px] flex-col items-center rounded-3xl px-5 py-6"
          >
            <div
              className="h-1 w-14 rounded-full"
              style={{ backgroundColor: t.color, boxShadow: `0 0 18px ${t.color}` }}
            />
            <div className="mt-3 text-lg font-bold text-white">{t.title}</div>
            <div className="text-xs tracking-[0.2em]" style={{ color: t.color }}>
              {t.sub}
            </div>
          </motion.div>
        ))}

        {/* Floating 3D glass capsules that snap into the 3 tracks */}
        {CAPSULES.map((c, i) => {
          const orderInGroup = groupCounts[c.group]++;
          const targetX = TRACKS[c.group].colX;
          const targetY = -58 + orderInGroup * 62;

          return (
            <motion.div
              key={c.name}
              initial={{ x: c.x, y: c.y - 40, opacity: 0, rotate: c.rot }}
              animate={
                organized
                  ? {
                      x: targetX,
                      y: targetY,
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      x: c.x,
                      y: [c.y - 8, c.y + 10, c.y - 8],
                      rotate: [c.rot - 3, c.rot + 3, c.rot - 3],
                      opacity: 1,
                      scale: 1,
                    }
              }
              transition={
                organized
                  ? {
                      type: 'spring',
                      stiffness: 110,
                      damping: 16,
                      delay: i * 0.03,
                    }
                  : {
                      y: { duration: 3.4 + (i % 4) * 0.6, repeat: Infinity, ease: 'easeInOut' },
                      rotate: { duration: 4.2 + (i % 3) * 0.7, repeat: Infinity, ease: 'easeInOut' },
                      opacity: { duration: 0.5, delay: i * 0.04 },
                    }
              }
              className="glass-panel absolute z-20 flex w-[176px] items-center justify-center gap-2.5 rounded-2xl px-4 py-2.5"
              style={{
                borderColor: `${c.color}55`,
                boxShadow: `0 10px 30px rgba(0,0,0,0.45), 0 0 22px ${c.color}22`,
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: c.color, boxShadow: `0 0 10px ${c.color}` }}
              />
              <span className="font-mono-tech text-sm font-semibold tracking-wide text-slate-100">
                {c.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom cue */}
      <motion.p
        animate={{ opacity: 0.75 }}
        className="text-sm tracking-[0.16em] text-slate-400"
      >
        {organized
          ? '先放鬆一下，一起逛完這座「AI 命名博物館」'
          : '了解之後，發現其實有一定的規律跟意義'}
      </motion.p>
    </div>
  );
}
