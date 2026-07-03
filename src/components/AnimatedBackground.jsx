import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * AnimatedBackground
 * -------------------
 * A layered, ambient background: 4 drifting gradient orbs (with subtle
 * mouse-driven parallax), 2 large rotating "aurora" rings, ~22 floating
 * particles with twinkle + drift, a faint moving grid, and a vignette
 * to keep foreground content readable.
 *
 * Drop this in once near the root of your app (it's `fixed`, so it
 * stays put behind everything). All animation is GPU-friendly
 * (transform/opacity only).
 */

// ---- config ---------------------------------------------------------

const ORB_COLORS = [
  "rgba(6,182,212,0.18)",   // cyan
  "rgba(59,130,246,0.16)",  // blue
  "rgba(139,92,246,0.16)",  // violet
  "rgba(236,72,153,0.12)",  // pink (accent, used sparingly)
];

const PARTICLE_COLORS = [
  "rgba(6,182,212,0.5)",
  "rgba(59,130,246,0.5)",
  "rgba(139,92,246,0.5)",
];

const PARTICLE_COUNT = 22;

// ---- helpers ----------------------------------------------------------

const rand = (min, max) => Math.random() * (max - min) + min;

function useParticles(count) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: rand(2, 6),
        left: rand(0, 100),
        top: rand(0, 100),
        duration: rand(14, 34),
        xDrift: rand(-40, 40),
        yDrift: rand(-60, 60),
        delay: rand(0, 6),
        twinkleDuration: rand(2.5, 5.5),
        color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      })),
    [count]
  );
}

function useOrbs() {
  return useMemo(
    () => [
      {
        id: 0,
        size: 480,
        top: "-12%",
        left: "-12%",
        color: ORB_COLORS[0],
        duration: 19,
        range: 70,
        parallax: 18,
      },
      {
        id: 1,
        size: 440,
        top: "28%",
        left: "62%",
        color: ORB_COLORS[1],
        duration: 24,
        range: 60,
        parallax: 26,
      },
      {
        id: 2,
        size: 420,
        top: "62%",
        left: "8%",
        color: ORB_COLORS[2],
        duration: 27,
        range: 55,
        parallax: 22,
      },
      {
        id: 3,
        size: 320,
        top: "5%",
        left: "45%",
        color: ORB_COLORS[3],
        duration: 21,
        range: 45,
        parallax: 32,
      },
    ],
    []
  );
}

// ---- mouse-reactive orb ------------------------------------------------

function ParallaxOrb({ orb, mouseX, mouseY }) {
  // each orb drifts on its own loop, then mouse parallax is layered on top
  const px = useTransform(mouseX, (v) => v * orb.parallax);
  const py = useTransform(mouseY, (v) => v * orb.parallax);
  const springX = useSpring(px, { stiffness: 40, damping: 20, mass: 0.6 });
  const springY = useSpring(py, { stiffness: 40, damping: 20, mass: 0.6 });

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: orb.size,
        height: orb.size,
        top: orb.top,
        left: orb.left,
        background: `radial-gradient(circle at 35% 35%, ${orb.color}, rgba(0,0,0,0) 70%)`,
        filter: "blur(90px)",
        x: springX,
        y: springY,
      }}
      animate={{
        x: [0, orb.range, -orb.range * 0.6, 0],
        y: [0, -orb.range * 0.7, orb.range * 0.5, 0],
        scale: [1, 1.08, 0.96, 1],
      }}
      transition={{
        duration: orb.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// ---- rotating aurora ring ------------------------------------------------

function AuroraRing({ size, color, duration, reverse, top, left }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: `conic-gradient(from 0deg, transparent, ${color}, transparent 60%)`,
        filter: "blur(50px)",
        mixBlendMode: "screen",
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    />
  );
}

// ---- particle field ------------------------------------------------

function Particle({ particle }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: particle.size,
        height: particle.size,
        left: `${particle.left}%`,
        top: `${particle.top}%`,
        background: particle.color,
        filter: "blur(0.5px)",
        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
      }}
      animate={{
        x: [0, particle.xDrift, 0],
        y: [0, particle.yDrift, 0],
        opacity: [0.15, 0.85, 0.15],
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// ---- faint moving grid (very subtle depth cue) ------------------------------------------------

function DriftingGrid() {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)",
      }}
      animate={{
        backgroundPosition: ["0px 0px", "56px 56px"],
      }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    />
  );
}

// ---- main component ------------------------------------------------

const AnimatedBackground = () => {
  const particles = useParticles(PARTICLE_COUNT);
  const orbs = useOrbs();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  // smooth the raw pointer signal so parallax doesn't feel jittery
  const mouseX = useSpring(rawX, { stiffness: 50, damping: 25 });
  const mouseY = useSpring(rawY, { stiffness: 50, damping: 25 });

  const frame = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (e) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        rawX.set(nx);
        rawY.set(ny);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [reduceMotion, rawX, rawY]);

  if (reduceMotion) {
    // Static fallback respecting prefers-reduced-motion: ambient gradient,
    // no movement, no parallax.
    return (
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(6,182,212,0.12), transparent 50%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.10), transparent 50%), radial-gradient(circle at 30% 80%, rgba(139,92,246,0.10), transparent 50%)",
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* base wash so orbs have something cohesive to sit on */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(2,6,23,0) 0%, rgba(2,6,23,0.02) 100%)",
        }}
      />

      <DriftingGrid />

      {/* rotating aurora rings, behind the orbs */}
      <AuroraRing
        size={700}
        color="rgba(6,182,212,0.10)"
        duration={60}
        top="-15%"
        left="-10%"
      />
      <AuroraRing
        size={620}
        color="rgba(139,92,246,0.10)"
        duration={75}
        reverse
        top="40%"
        left="50%"
      />

      {/* gradient orbs with mouse parallax */}
      {orbs.map((orb) => (
        <ParallaxOrb key={orb.id} orb={orb} mouseX={mouseX} mouseY={mouseY} />
      ))}

      {/* particle field */}
      {particles.map((particle) => (
        <Particle key={particle.id} particle={particle} />
      ))}

      {/* vignette to keep edges calm and foreground content readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(2,6,23,0.25) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;