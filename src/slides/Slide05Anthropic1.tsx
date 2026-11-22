import { motion } from 'framer-motion';
import { ANTHROPIC_MODELS } from '../data/models';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number; // 0: Haiku, 1: Sonnet, 2: Opus
}

export function Slide05Anthropic1({ step }: Props) {
  const trio = ANTHROPIC_MODELS.slice(0, 3);
  const activeIdx = Math.min(step, 2);

  return (
    <div className="relative flex h-full w-full flex-col justify-between px-12 py-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-amber-300/80 uppercase">
            ANTHROPIC ・ CLAUDE 5 SERIES
          </p>
          <h2 className="font-literary mt-1 text-4xl font-bold text-amber-50">
            文學創作：從 17 音節到交響鉅作
          </h2>
        </div>
        <div className="glass-pill rounded-full px-4 py-1.5 text-xs text-amber-200">
          篇幅越厚 ＝ 思考越深
        </div>
      </div>

      {/* 3 Literary Diorama Pedestals with bespoke cadence animations */}
      <div className="grid flex-1 grid-cols-3 items-center gap-8 py-4">
        {trio.map((m, idx) => {
          const revealed = idx <= activeIdx;
          const focused = idx === activeIdx;

          return (
            <motion.div
              key={m.id}
              animate={{
                opacity: revealed ? (focused ? 1 : 0.58) : 0.1,
                y: revealed ? (focused ? -10 : 0) : 28,
                scale: revealed ? (focused ? 1.03 : 0.96) : 0.9,
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 17 }}
              className="glass-panel relative flex h-[430px] flex-col items-center justify-between overflow-hidden rounded-3xl p-6"
              style={{
                borderColor: focused ? `${m.accent}77` : 'rgba(255,255,255,0.1)',
              }}
            >
              {/* Literary rhythmic visual motif behind diorama */}
              {idx === 0 && revealed && (
                /* Haiku: 5 - 7 - 5 crisp syllable pulse dots */
                <div className="flex items-center gap-3 pt-1">
                  {[5, 7, 5].map((count, gi) => (
                    <div key={gi} className="flex gap-1">
                      {Array.from({ length: count }).map((_, di) => (
                        <motion.span
                          key={di}
                          initial={{ scale: 0 }}
                          animate={{ scale: [0.7, 1.25, 1] }}
                          transition={{
                            delay: gi * 0.16 + di * 0.03,
                            duration: 0.35,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-rose-300"
                        />
                      ))}
                    </div>
                  ))}
                  <span className="font-mono-tech text-[10px] text-rose-200/80">17 音節</span>
                </div>
              )}

              {idx === 1 && revealed && (
                /* Sonnet: 14 rhythmic golden stanza bars */
                <div className="flex w-44 flex-col gap-[3px] pt-1">
                  {Array.from({ length: 14 }).map((_, li) => (
                    <motion.div
                      key={li}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: li * 0.03, duration: 0.35 }}
                      className="h-[2px] origin-left rounded-full bg-amber-300/70"
                      style={{ width: li % 4 === 3 ? '74%' : '100%' }}
                    />
                  ))}
                </div>
              )}

              {idx === 2 && revealed && (
                /* Opus: Sweeping golden symphony waveform */
                <svg viewBox="0 0 220 34" className="h-9 w-52">
                  <motion.path
                    d="M 4 17 Q 32 2, 58 17 T 112 17 T 166 17 T 216 17"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                  <motion.path
                    d="M 4 17 Q 32 32, 58 17 T 112 17 T 166 17 T 216 17"
                    fill="none"
                    stroke="#FDE68A"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.15 }}
                  />
                </svg>
              )}

              {!revealed && <div className="h-7" />}

              {/* 3D Diorama */}
              <DioramaImage
                src={m.asset}
                alt={m.name}
                accent={m.accent}
                float={focused}
                className="h-56 w-56"
              />

              {/* Compact Label */}
              <div className="text-center">
                <div className="font-literary text-2xl font-bold text-amber-50">
                  {m.name}
                  <span className="ml-2 font-sans text-sm font-normal text-amber-200/70">
                    {m.zh}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-slate-300">{m.tag}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Subtle progression indicator */}
      <div className="mx-auto flex items-center gap-6 text-xs tracking-widest text-amber-200/70">
        <span>極快小巧</span>
        <span className="h-px w-20 bg-gradient-to-r from-rose-300/60 via-amber-300/70 to-amber-500" />
        <span>深度鉅作</span>
      </div>
    </div>
  );
}
