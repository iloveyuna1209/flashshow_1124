import { useEffect, useRef } from 'react';

interface PerfumeParticlesProps {
  active: boolean;
  evapSpeed: number; // higher = fast rise & quick vanish (Cologne)
  longevity: number; // higher = slow dense lingering cloud (Extrait)
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  maxLife: number;
  phase: number;
  sparkle: boolean;
}

export function PerfumeParticles({
  active,
  evapSpeed,
  longevity,
  color,
}: PerfumeParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    const width = 260;
    const height = 160;
    canvas.width = width;
    canvas.height = height;

    const maxParticles = Math.round(32 + longevity * 54);
    const particles: Particle[] = [];

    const spawn = (prewarm = false): Particle => {
      const maxLife = 30 + longevity * 145 + Math.random() * 28;
      const life = prewarm ? Math.random() * maxLife * 0.85 : 0;
      const vy = -(0.55 + evapSpeed * 0.8 + Math.random() * 0.45);
      const vx = (Math.random() - 0.5) * (0.65 + evapSpeed * 0.65);
      return {
        x: width / 2 + (Math.random() - 0.5) * 24 + vx * life * 0.6,
        y: height - 10 + vy * life * 0.55,
        vx,
        vy,
        radius: 3.5 + longevity * 11 + Math.random() * (3 + longevity * 8),
        life,
        maxLife,
        phase: Math.random() * Math.PI * 2,
        sparkle: Math.random() < (1.1 - longevity) * 0.7,
      };
    };

    if (active) {
      for (let i = 0; i < Math.round(maxParticles * 0.65); i++) {
        particles.push(spawn(true));
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (active) {
        for (let k = 0; k < 2; k++) {
          if (particles.length < maxParticles && Math.random() < 0.45 + longevity * 0.35) {
            particles.push(spawn(false));
          }
        }

        // Subtle nozzle mist cone
        const coneGrad = ctx.createRadialGradient(
          width / 2,
          height - 6,
          4,
          width / 2,
          height - 54,
          72 + longevity * 30
        );
        coneGrad.addColorStop(0, `${color}`);
        coneGrad.addColorStop(1, 'transparent');
        ctx.save();
        ctx.globalAlpha = 0.14 + longevity * 0.16;
        ctx.fillStyle = coneGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.life += 1;
          const progress = p.life / p.maxLife;

          p.x += p.vx + Math.sin(p.life * 0.05 + p.phase) * (0.35 + longevity * 0.85);
          p.y += p.vy * (1 - progress * (0.3 + longevity * 0.55));

          const fadeIn = Math.min(1, progress * 6);
          const fadeOut = Math.max(0, 1 - Math.pow(progress, 1.15 + longevity * 1.3));
          const alpha = fadeIn * fadeOut * (0.55 + longevity * 0.38);

          const r = p.radius * (1 + progress * (0.55 + evapSpeed * 0.3));

          ctx.save();
          ctx.globalAlpha = alpha;
          if (p.sparkle) {
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowColor = color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(1.8, r * 0.32), 0, Math.PI * 2);
            ctx.fill();
          } else {
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
            grad.addColorStop(0, color);
            grad.addColorStop(0.45, color);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();

          if (p.life >= p.maxLife || p.y < -20) {
            particles.splice(i, 1);
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [active, evapSpeed, longevity, color]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none h-[150px] w-[240px]"
    />
  );
}
