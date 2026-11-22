import { useState } from 'react';
import { motion } from 'framer-motion';

interface DioramaImageProps {
  src: string;
  alt: string;
  accent?: string;
  className?: string;
  imgClassName?: string;
  wide?: boolean;
  float?: boolean;
  fallbackType?:
    | 'sol'
    | 'astra'
    | 'argon'
    | 'carbon'
    | 'toilette'
    | 'parfum'
    | 'extrait'
    | 'capsules'
    | 'outro'
    | 'orb';
}

function BespokeGlassFallback({
  type = 'orb',
  accent,
}: {
  type?: DioramaImageProps['fallbackType'];
  accent: string;
}) {
  if (type === 'sol') {
    return (
      <svg viewBox="0 0 240 240" className="h-[88%] w-[88%] drop-shadow-[0_0_40px_rgba(251,191,36,0.55)]">
        <defs>
          <radialGradient id="solCore" cx="45%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="42%" stopColor="#FBBF24" />
            <stop offset="78%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#7C2D12" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        <motion.ellipse
          cx="120"
          cy="120"
          rx="96"
          ry="34"
          fill="none"
          stroke="#FDE68A"
          strokeOpacity="0.55"
          strokeWidth="2.5"
          transform="rotate(-22 120 120)"
          animate={{ rotate: [-22, 338] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />
        <motion.ellipse
          cx="120"
          cy="120"
          rx="84"
          ry="44"
          fill="none"
          stroke="#F59E0B"
          strokeOpacity="0.45"
          strokeWidth="2"
          transform="rotate(28 120 120)"
          animate={{ rotate: [28, -332] }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        />
        <circle cx="120" cy="120" r="64" fill="url(#solCore)" />
        <circle
          cx="120"
          cy="120"
          r="66"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
        />
        <ellipse cx="100" cy="95" rx="22" ry="12" fill="rgba(255,255,255,0.28)" transform="rotate(-28 100 95)" />
      </svg>
    );
  }

  if (type === 'astra') {
    return (
      <svg viewBox="0 0 240 240" className="h-[88%] w-[88%] drop-shadow-[0_0_45px_rgba(167,139,250,0.6)]">
        <defs>
          <radialGradient id="astraGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="28%" stopColor="#C4B5FD" />
            <stop offset="65%" stopColor="#4F46E5" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#070B14" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="120" cy="120" r="92" fill="url(#astraGlow)" />
        <motion.g
          style={{ transformOrigin: '120px 120px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <path
              key={deg}
              d="M120 120 Q158 92 192 128"
              fill="none"
              stroke="#DDD6FE"
              strokeOpacity="0.6"
              strokeWidth="2.4"
              strokeLinecap="round"
              transform={`rotate(${deg} 120 120)`}
            />
          ))}
        </motion.g>
        <circle
          cx="120"
          cy="120"
          r="84"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(221,214,254,0.38)"
          strokeWidth="2"
        />
        <circle cx="120" cy="120" r="16" fill="#FFFFFF" />
      </svg>
    );
  }

  if (type === 'argon') {
    return (
      <svg viewBox="0 0 240 240" className="h-[88%] w-[88%] drop-shadow-[0_0_42px_rgba(129,140,248,0.6)]">
        <defs>
          <radialGradient id="argonHalo" cx="50%" cy="44%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#818CF8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#312E81" stopOpacity="0.05" />
          </radialGradient>
        </defs>
        <circle cx="120" cy="108" r="88" fill="url(#argonHalo)" />
        <path
          d="M78 104 C78 68 162 68 162 104 C162 130 144 144 140 162 L100 162 C96 144 78 130 78 104 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(199,210,254,0.65)"
          strokeWidth="2.5"
        />
        <path
          d="M108 162 L108 118 L115 106 L120 118 L125 106 L132 118 L132 162"
          fill="none"
          stroke="#FDE047"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="98" y="164" width="44" height="12" rx="4" fill="#94A3B8" />
        <rect x="103" y="178" width="34" height="10" rx="4" fill="#64748B" />
        <rect x="109" y="190" width="22" height="7" rx="3.5" fill="#475569" />
      </svg>
    );
  }

  if (type === 'carbon') {
    return (
      <svg viewBox="0 0 260 240" className="h-[90%] w-[90%] drop-shadow-[0_0_40px_rgba(52,211,153,0.45)]">
        <defs>
          <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECFEFF" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#67E8F9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        {/* Left: Layered dark metallic graphite sheets */}
        {[0, 18, 36].map((dy, i) => (
          <polygon
            key={dy}
            points={`34,${104 + dy} 78,${82 + dy} 122,${104 + dy} 78,${126 + dy}`}
            fill={`rgba(30,41,59,${0.9 - i * 0.12})`}
            stroke="#94A3B8"
            strokeOpacity={0.65 - i * 0.12}
            strokeWidth="2"
          />
        ))}
        {/* Right: Faceted crystal diamond */}
        <polygon
          points="178,44 226,96 178,176 130,96"
          fill="url(#diamondGrad)"
          stroke="#E0F2FE"
          strokeWidth="2"
        />
        <polyline points="130,96 226,96" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" />
        <polyline points="178,44 160,96 178,176" stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth="1.5" />
        <polyline points="178,44 196,96 178,176" stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth="1.5" />
        {/* Molecular bridge */}
        <line x1="110" y1="112" x2="142" y2="112" stroke="#34D399" strokeWidth="2.5" strokeDasharray="4 4" />
      </svg>
    );
  }

  if (type === 'toilette' || type === 'parfum' || type === 'extrait') {
    const cfg = {
      toilette: {
        fillTop: '#FEF9C3',
        fillBottom: '#FDE047',
        fillOpacity: 0.42,
        cap: '#E2E8F0',
        bodyW: 78,
        bodyH: 108,
        glow: 'rgba(253,230,138,0.42)',
      },
      parfum: {
        fillTop: '#FDE68A',
        fillBottom: '#F59E0B',
        fillOpacity: 0.68,
        cap: '#FBBF24',
        bodyW: 88,
        bodyH: 112,
        glow: 'rgba(245,158,11,0.55)',
      },
      extrait: {
        fillTop: '#F59E0B',
        fillBottom: '#9A3412',
        fillOpacity: 0.9,
        cap: '#F59E0B',
        bodyW: 98,
        bodyH: 116,
        glow: 'rgba(234,88,12,0.7)',
      },
    }[type];
    const x = (200 - cfg.bodyW) / 2;
    const y = 212 - cfg.bodyH;
    return (
      <svg viewBox="0 0 200 250" className="h-[92%] w-[92%]" style={{ filter: `drop-shadow(0 0 32px ${cfg.glow})` }}>
        <defs>
          <linearGradient id={`liq-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={cfg.fillTop} stopOpacity={cfg.fillOpacity} />
            <stop offset="100%" stopColor={cfg.fillBottom} stopOpacity={Math.min(1, cfg.fillOpacity + 0.15)} />
          </linearGradient>
        </defs>
        {/* Cap */}
        <rect x="82" y="34" width="36" height="32" rx="6" fill={cfg.cap} fillOpacity="0.88" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        {/* Neck */}
        <rect x="89" y="66" width="22" height="24" rx="2" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.35)" />
        {/* Outer glass bottle */}
        <rect
          x={x}
          y={y}
          width={cfg.bodyW}
          height={cfg.bodyH}
          rx="16"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.42)"
          strokeWidth="2.2"
        />
        {/* Inner liquid */}
        <rect
          x={x + 8}
          y={y + 20}
          width={cfg.bodyW - 16}
          height={cfg.bodyH - 28}
          rx="10"
          fill={`url(#liq-${type})`}
        />
        {/* Specular highlight */}
        <rect x={x + 12} y={y + 12} width="8" height={cfg.bodyH - 24} rx="4" fill="rgba(255,255,255,0.22)" />
      </svg>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative z-10 flex aspect-square h-[76%] max-h-full items-center justify-center rounded-full glass-panel"
      style={{
        boxShadow: `0 0 60px ${accent}33, inset 0 1px 18px ${accent}55`,
        borderColor: `${accent}55`,
      }}
    >
      <div
        className="absolute inset-4 rounded-full border border-dashed opacity-35"
        style={{ borderColor: accent }}
      />
    </motion.div>
  );
}

export function DioramaImage({
  src,
  alt,
  accent = '#60A5FA',
  className = '',
  imgClassName = '',
  wide = false,
  float = false,
  fallbackType = 'orb',
}: DioramaImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center mix-blend-lighten ${float ? 'animate-float-slow' : ''} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-4 rounded-full blur-3xl opacity-30 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, ${accent} 0%, transparent 72%)`,
        }}
      />

      {!failed ? (
        <img
          src={src}
          alt={alt}
          draggable={false}
          onError={() => setFailed(true)}
          className={`relative z-10 h-full w-full object-contain ${
            wide ? 'diorama-blend-wide' : 'diorama-blend'
          } ${imgClassName}`}
        />
      ) : (
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <BespokeGlassFallback type={fallbackType} accent={accent} />
        </div>
      )}
    </div>
  );
}
