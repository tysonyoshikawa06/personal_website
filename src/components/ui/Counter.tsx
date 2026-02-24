import { useState, useEffect } from "react";
import { useReveal } from "../../hooks";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ end, suffix = "", duration = 1600 }: CounterProps) {
  const [val, setVal] = useState(0);
  const [ref, vis] = useReveal(0.3);

  useEffect(() => {
    if (!vis) return;
    let start = 0;
    const step = end / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= end) {
        setVal(end);
        clearInterval(id);
      } else {
        setVal(Math.round(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(id);
  }, [vis, end, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
