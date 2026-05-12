import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  label: string;
};

export function AnimatedStat({ value, label }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNum = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericMatch ? numericMatch[2] : "";

  const [display, setDisplay] = useState<string>(targetNum != null ? "0" + suffix : value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || targetNum == null) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(targetNum * eased);
      setDisplay(current + suffix);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, targetNum, suffix]);

  return (
    <div
      ref={ref}
      className="glass-panel rounded-2xl p-6 text-center shadow-soft transition-transform hover:-translate-y-1"
    >
      <div className="bg-gradient-primary bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
        {targetNum != null ? display : value}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
