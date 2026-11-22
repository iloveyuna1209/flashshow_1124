import { motion } from 'framer-motion';
import { ANTHROPIC_MODELS, CLAUDE_SAGA } from '../data/models';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number; // 0: Fable vs Mythos, 1: Saga (COMING SOON) reveal
}

export function Slide06Anthropic2({ step }: Props) {
  const fable = ANTHROPIC_MODELS[3];
  const mythos = ANTHROPIC_MODELS[4];
  const showSaga = step >= 1;

  return (
    <div className="relative flex h-full w-full flex-col justify-between px-12 py-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-rose-300/80 uppercase">
            ANTHROPIC ・ APEX TIER
          </p>
          <h2 className="font-literary mt-1 text-4xl font-bold text-amber-50">
            禁區級雙生：寓言的邊界 vs. 神話的無界
          </h2>
        </div>
        <div className="glass-pill rounded-full px-4 py-1.5 text-xs text-rose-200">
          兩者皆能影響眾人，差別在於「界線」
        </div>
      </div>

      {/* Main Split Stage: Fable vs Mythos + Bottom/Side Saga Reveal */}
      <div className="relative my-3 flex flex-1 items-center justify-center gap-6">
        {/* FABLE — Enclosed in calm unbroken circular halo */}
        <motion.div
          animate={{
            flex: showSaga ? 1 : 1.15,
            opacity: showSaga ? 0.85 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative flex h-[430px] flex-col items-center justify-between overflow-hidden rounded-3xl p-6"
          style={{ borderColor: 'rgba(253,230,138,0.45)' }}
        >
          {/* Unbroken golden moral boundary ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute top-1/2 h-[290px] w-[290px] -translate-y-1/2 rounded-full border-2 border-amber-200/45 shadow-[0_0_40px_rgba(253,230,138,0.22)]"
          />

          <div className="z-10 glass-pill rounded-full px-3.5 py-1 text-[11px] tracking-widest text-amber-200">
            有道德邊界 ・ 最強調安全合法
          </div>

          <DioramaImage
            src={fable.asset}
            alt="Fable"
            accent={fable.accent}
            float
            className="z-10 h-60 w-60"
          />

          <div className="z-10 text-center">
            <div className="font-literary text-3xl font-bold text-amber-100">
              Fable <span className="font-sans text-base font-normal text-amber-200/70">寓言</span>
            </div>
            <p className="mt-1 text-xs text-slate-300">傳遞人生道理與道德體悟</p>
          </div>
        </motion.div>

        {/* VS Divider */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-20 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
          <span className="font-mono-tech text-xs font-bold tracking-widest text-slate-400">VS</span>
          <div className="h-20 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
        </div>

        {/* MYTHOS — Breaking out of boundaries */}
        <motion.div
          animate={{
            flex: showSaga ? 1 : 1.15,
            opacity: showSaga ? 0.85 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative flex h-[430px] flex-col items-center justify-between overflow-visible rounded-3xl p-6"
          style={{
            borderColor: 'rgba(251,113,133,0.55)',
            boxShadow: '0 0 50px rgba(244,63,94,0.16)',
          }}
        >
          {/* Shattered dashed expanding energy ring */}
          <motion.div
            animate={{ scale: [1, 1.09, 1], opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute top-1/2 h-[310px] w-[310px] -translate-y-1/2 rounded-full border-2 border-dashed border-rose-400/55"
          />

          <div className="z-10 glass-pill rounded-full border-rose-400/40 px-3.5 py-1 text-[11px] tracking-widest text-rose-200">
            打破自然框架 ・ 不受安全規範限制
          </div>

          <DioramaImage
            src={mythos.asset}
            alt="Mythos"
            accent={mythos.accent}
            float
            className="z-10 h-64 w-64 scale-105"
          />

          <div className="z-10 text-center">
            <div className="font-literary text-3xl font-bold text-rose-100">
              Mythos <span className="font-sans text-base font-normal text-rose-200/70">神話</span>
            </div>
            <p className="mt-1 text-xs text-slate-300">述說超越自然力量的無限延伸</p>
          </div>
        </motion.div>

        {/* Step 1: SAGA (尚未推出) slides in dramatically */}
        {showSaga && (
          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 110, damping: 16 }}
            className="glass-panel relative flex h-[430px] w-[310px] shrink-0 flex-col items-center justify-between overflow-hidden rounded-3xl p-6"
            style={{
              borderColor: 'rgba(147,197,253,0.55)',
              boxShadow: '0 0 48px rgba(147,197,253,0.18)',
            }}
          >
            <div className="z-10 flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-400/15 px-3.5 py-1 text-[11px] font-semibold tracking-widest text-sky-200">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-sky-300" />
              尚未推出・彩蛋預告
            </div>

            <DioramaImage
              src={CLAUDE_SAGA.asset}
              alt="Saga"
              accent={CLAUDE_SAGA.accent}
              float
              className="z-10 h-52 w-52"
            />

            {/* Endlessly scrolling memory ribbon */}
            <div className="w-full overflow-hidden rounded-full border border-sky-300/20 bg-sky-950/40 py-1">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
                className="font-mono-tech flex whitespace-nowrap text-[10px] tracking-[0.25em] text-sky-300/80"
              >
                <span>北歐英雄史詩 · 跨越世代 · 超長記憶 · 持續運作 ·&nbsp;</span>
                <span>北歐英雄史詩 · 跨越世代 · 超長記憶 · 持續運作 ·&nbsp;</span>
              </motion.div>
            </div>

            <div className="z-10 text-center">
              <div className="font-literary text-3xl font-bold text-sky-100">
                Saga <span className="font-sans text-base font-normal text-sky-200/70">史詩</span>
              </div>
              <p className="mt-1 text-xs text-slate-300">海量記憶 × 長時間持續運作</p>
            </div>
          </motion.div>
        )}
      </div>

      <div className="text-center text-xs tracking-[0.2em] text-slate-400">
        {showSaga
          ? '從短詩到跨越百年的北歐史詩，文學承載的不只是文筆，更是「時間尺度」'
          : '點擊揭曉尚未公開的隱藏傳說模型 →'}
      </div>
    </div>
  );
}
