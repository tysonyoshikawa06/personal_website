import { useState } from "react";
import { useReveal } from "../hooks";
import { C, SKILL_CATEGORIES } from "../constants";
import { SectionHeader, SkillBar } from "../components/ui";

export function Skills() {
  const [active, setActive] = useState("general");
  const [ref, vis] = useReveal(0.1);

  return (
    <section
      style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      <SectionHeader number="01" title="Skills" id="skills" />

      <div
        ref={ref}
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease 0.15s",
        }}
      >
        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 40,
            flexWrap: "wrap",
            borderBottom: `1px solid ${C.border}`,
            paddingBottom: 0,
          }}
        >
          {Object.entries(SKILL_CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: active === key ? 600 : 400,
                color: active === key ? C.accent : C.textDim,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "12px 20px",
                borderBottom:
                  active === key
                    ? `2px solid ${C.accent}`
                    : "2px solid transparent",
                transition: "all 0.3s ease",
                letterSpacing: "0.02em",
                marginBottom: -1,
              }}
              onMouseEnter={(e) => {
                if (active !== key)
                  (e.target as HTMLElement).style.color = C.textMuted;
              }}
              onMouseLeave={(e) => {
                if (active !== key)
                  (e.target as HTMLElement).style.color = C.textDim;
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {SKILL_CATEGORIES[active].items.map((skill, idx) => (
            <SkillBar
              key={`${active}-${skill.name}`}
              skill={skill}
              delay={idx * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
