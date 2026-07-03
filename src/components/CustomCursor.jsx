import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * CustomCursor
 * -------------------
 * Replaces the native cursor with a small glowing dot + a trailing
 * "halo" ring. Both blend continuously between cyan, blue, and violet
 * as the cursor moves, and react to hoverable UI (cards, navbar links,
 * buttons) by growing, intensifying color, and tightening the trail.
 *
 * Usage:
 *   1. Drop <CustomCursor /> once near the root of your app (alongside
 *      <AnimatedBackground />, for example).
 *   2. Mark anything that should trigger the hover state with
 *      data-cursor="hover" — e.g. cards, nav links, buttons:
 *        <a data-cursor="hover" href="/about">About</a>
 *      The component also auto-detects <a>, <button>, and
 *      [role="button"] even without the attribute, so most apps need
 *      zero markup changes.
 *   3. Add `cursor: none;` globally (the component injects this for
 *      you) so the native cursor doesn't double up.
 *
 * Desktop-only by design: falls back to the native cursor on touch
 * devices and when prefers-reduced-motion is set.
 */

const THEME_COLORS = [
  { r: 6, g: 182, b: 212 },   // cyan
  { r: 59, g: 130, b: 246 },  // blue
  { r: 139, g: 92, b: 246 },  // violet
];

// Smoothly cycles through the theme palette over time, returning an
// "rgb(r,g,b)" string. Cycle length in seconds.
function useColorCycle(cycleSeconds = 6) {
  const [color, setColor] = useState("rgb(6,182,212)");
  const raf = useRef(null);
  const start = useRef(performance.now());

  useEffect(() => {
    const tick = (now) => {
      const elapsed = (now - start.current) / 1000;
      const t = (elapsed % cycleSeconds) / cycleSeconds; // 0..1
      const segment = t * THEME_COLORS.length;
      const idx = Math.floor(segment) % THEME_COLORS.length;
      const next = (idx + 1) % THEME_COLORS.length;
      const localT = segment - idx;

      const a = THEME_COLORS[idx];
      const b = THEME_COLORS[next];
      const r = Math.round(a.r + (b.r - a.r) * localT);
      const g = Math.round(a.g + (b.g - a.g) * localT);
      const bl = Math.round(a.b + (b.b - a.b) * localT);

      setColor(`rgb(${r},${g},${bl})`);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [cycleSeconds]);

  return color;
}

function isHoverTarget(el) {
  if (!el) return false;
  return Boolean(
    el.closest(
      '[data-cursor="hover"], a, button, [role="button"], input, select, textarea, .card, nav, [data-cursor-card]'
    )
  );
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  // ring trails slightly behind the dot for a "drop" / inertia feel
  const ringX = useSpring(dotX, { stiffness: 150, damping: 20, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 150, damping: 20, mass: 0.6 });
  // outer glow trails even further behind, exaggerating the drag
  const glowX = useSpring(dotX, { stiffness: 60, damping: 18, mass: 1 });
  const glowY = useSpring(dotY, { stiffness: 60, damping: 18, mass: 1 });

  const mixedColor = useColorCycle(6);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || reduceMotion) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const styleTag = document.createElement("style");
    styleTag.setAttribute("data-custom-cursor", "true");
    styleTag.textContent = `
      html, body, a, button, [role="button"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleTag);

    const handleMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
      setHovering(isHoverTarget(e.target));
    };

    const handleLeaveWindow = () => setVisible(false);
    const handleEnterWindow = () => setVisible(true);

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerout", handleLeaveWindow);
    window.addEventListener("pointerover", handleEnterWindow);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerout", handleLeaveWindow);
      window.removeEventListener("pointerover", handleEnterWindow);
      styleTag.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  const dotSize = hovering ? 14 : 8;
  const ringSize = hovering ? 56 : 32;
  const glowSize = hovering ? 110 : 70;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}
    >
      {/* outer soft glow, slowest trail */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: glowSize,
          height: glowSize,
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background: mixedColor,
          opacity: hovering ? 0.28 : 0.16,
          filter: "blur(18px)",
        }}
        transition={{ type: "tween", duration: 0.25 }}
      />

      {/* mid ring, medium trail */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: ringSize,
          height: ringSize,
          left: ringX,
          top: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: `1.5px solid ${mixedColor}`,
          background: "transparent",
          opacity: hovering ? 0.9 : 0.55,
        }}
        transition={{ type: "tween", duration: 0.25 }}
      />

      {/* core dot, follows pointer almost exactly */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: dotSize,
          height: dotSize,
          left: dotX,
          top: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: mixedColor,
          boxShadow: `0 0 12px ${mixedColor}`,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
    </div>
  );
}