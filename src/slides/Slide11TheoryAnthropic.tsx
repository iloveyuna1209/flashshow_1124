import { motion } from 'framer-motion';
import { DioramaImage } from '../components/DioramaImage';

interface Props {
  step: number; // 0: Ethics + enterprise order, 1: Founders English Literature bookmarks
}

export function Slide11TheoryAnthropic({ step }: Props) {
  const showFounders = step >= 1;

  return (
    <div className="relative flex h-full w-full items-center justify-between gap-10 px-14 py-12">
      {/* Left 60%: Classical Library Study Diorama */}
      <div className="relative flex h-full flex-[1.25] items-center justify-center">
        <DioramaImage
          src="./assets/theory-library.jpg"
          alt="Anthropic 古典文學與倫理天平微縮書桌"
          accent="#E5B87A"
          float
          className="h-[460px] w-[540px]"
        />
      </div>

      {/* Right 40%: Visual Clues */}
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <p className="font-mono-tech text-xs tracking-[0.28em] text-amber-300/80 uppercase">
            WHY THIS THEME ・ 02
          </p>
          <h2 className="font-literary mt-2 text-4xl font-bold text-amber-50">
            Anthropic 為什麼選文學？
          </h2>
        </div>

        <div className="glass-panel rounded-2xl p-5" style={{ borderColor: 'rgba(229,184,122,0.35)' }}>
          <div className="font-mono-tech text-xs text-amber-300">CLUE 01</div>
          <div className="mt-1 text-xl font-bold text-white">故事 ＝ 人類傳遞道德規範的載體</div>
          <p className="mt-1.5 text-sm text-slate-400">
            強調 AI 安全倫理、條理有序 → 這也是企業最常採用 Claude 的原因
          </p>
        </div>

        {/* Step 1: Founders Literature Background Bookmarks */}
        <motion.div
          initial={false}
          animate={{
            opacity: showFounders ? 1 : 0.12,
            y: showFounders ? 0 : 20,
          }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-3"
        >
          <div className="font-mono-tech text-xs tracking-widest text-amber-300/90">
            CLUE 02 ・ 共同創辦人彩蛋
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {[
              { name: 'Daniela Amodei', role: 'Dario Amodei 的妹妹', major: '主修英語文學' },
              { name: 'Jack Clark', role: 'Anthropic 共同創辦人', major: '主修英語文學' },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                animate={{ y: showFounders ? 0 : 12 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl border-amber-300/40 p-4"
              >
                <div className="font-literary text-lg font-bold text-amber-100">
                  {person.name}
                </div>
                <div className="mt-0.5 text-xs text-slate-400">{person.role}</div>
                <div className="mt-2.5 inline-block rounded-full bg-amber-400/15 px-3 py-0.5 text-xs font-medium text-amber-200">
                  {person.major}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
