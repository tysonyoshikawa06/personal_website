import { useState, useEffect } from "react";
import { C } from "../../constants";

interface SkillBarProps {
  skill: { name: string; level: number };
  delay: number;
}

export function SkillBar({ skill, delay }: SkillBarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50 + delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        background: C.surface,
        borderRadius: 10,
        padding: "20px 24px",
        border: `1px solid ${C.border}`,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(15px)",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: C.text,
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: C.textDim,
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        style={{
          height: 4,
          borderRadius: 2,
          background: C.border,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 2,
            background: `linear-gradient(90deg, ${C.accent}, #f0c97e)`,
            width: mounted ? `${skill.level}%` : "0%",
            transition: "width 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: `${delay + 200}ms`,
          }}
        />
      </div>
    </div>
  );
}
