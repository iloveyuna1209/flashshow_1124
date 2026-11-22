import { motion } from 'framer-motion';
import type { ThemeId } from '../data/models';

const THEME_GLOWS: Record<
  ThemeId,
  { primary: string; secondary: string; gridOpacity: number }
> = {
  museum: {
    primary: 'rgba(96, 165, 250, 0.16)',
    secondary: 'rgba(229, 184, 122, 0.12)',
    gridOpacity: 0.045,
  },
  openai: {
    primary: 'rgba(59, 130, 246, 0.22)',
    secondary: 'rgba(167, 139, 250, 0.16)',
    gridOpacity: 0.05,
  },
  anthropic: {
    primary: 'rgba(229, 184, 122, 0.20)',
    secondary: 'rgba(244, 63, 94, 0.13)',
    gridOpacity: 0.035,
  },
  google: {
    primary: 'rgba(34, 211, 238, 0.20)',
    secondary: 'rgba(168, 85, 247, 0.16)',
    gridOpacity: 0.06,
  },
  perfume: {
    primary: 'rgba(245, 158, 11, 0.20)',
    secondary: 'rgba(253, 230, 138, 0.12)',
    gridOpacity: 0.03,
  },
};

export function AmbientBackdrop({ theme }: { theme: ThemeId }) {
  const palette = THEME_GLOWS[theme];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden bg-[#070B14]">
      {/* Subtle museum floor grid */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: palette.gridOpacity,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse 75% 75% at 50% 50%, black 35%, transparent 100%)',
        }}
      />

      {/* Primary radial atmosphere */}
      <motion.div
        animate={{ backgroundColor: palette.primary }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
        className="absolute -left-[12%] -top-[18%] h-[62vh] w-[62vw] rounded-full blur-[140px]"
      />

      {/* Secondary radial atmosphere */}
      <motion.div
        animate={{ backgroundColor: palette.secondary }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
        className="absolute -bottom-[20%] -right-[10%] h-[58vh] w-[58vw] rounded-full blur-[150px]"
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, transparent 45%, rgba(3, 5, 10, 0.68) 100%)',
        }}
      />
    </div>
  );
}
