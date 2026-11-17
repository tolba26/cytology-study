import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** Circular progress. Fills with an animation once it is on screen, and again when the value changes. */
export function ProgressRing({ value, size = 56, label }: { value: number; size?: number; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const stroke = size >= 56 ? 4 : 3;
  const r = (size - stroke) / 2;
  const pct = Math.round(value * 100);
  return (
    <div ref={ref} className="ring" style={{ width: size, height: size }} role="img" aria-label={label ?? `${pct}% done`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} className="ring-track" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          className="ring-fill"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: inView ? value : 0, opacity: inView && value > 0 ? 1 : 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        />
      </svg>
      <span className="ring-label">
        {pct}
        <small>%</small>
      </span>
    </div>
  );
}
