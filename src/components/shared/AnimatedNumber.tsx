"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: string; // e.g. "2.5", "300", "$500K"
  suffix?: string; // e.g. "+"
  duration?: number; // ms
  className?: string;
  style?: React.CSSProperties;
}

function parseNumericValue(raw: string): { prefix: string; number: number; suffix: string } {
  const match = raw.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  return {
    prefix: match[1] || "",
    number: parseFloat(match[2].replace(/,/g, "")),
    suffix: match[3] || "",
  };
}

export function AnimatedNumber({ value, suffix = "", duration = 1800, className, style }: AnimatedNumberProps) {
  const { prefix, number, suffix: valueSuffix } = parseNumericValue(value);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(number);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(eased * number);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [number, duration]);

  const displayValue = number % 1 !== 0
    ? current.toFixed(1)
    : Math.round(current).toLocaleString();

  return (
    <span ref={ref} className={className} style={{ color: "var(--text)", ...style }} aria-label={`${value}${suffix}`}>
      {prefix}{displayValue}{valueSuffix}{suffix}
    </span>
  );
}
