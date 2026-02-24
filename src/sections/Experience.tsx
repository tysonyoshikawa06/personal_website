import { useState } from "react";
import { useReveal } from "../hooks";
import { C, EXPERIENCES } from "../constants";
import { SectionHeader } from "../components/ui";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  desc: string;
  tags: string[];
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
}) {
  const [ref, vis] = useReveal(0.2);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 40,
        position: "relative",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateX(0)" : "translateX(-30px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`,
      }}
    >
      {/* Dot */}
      <div
        style={{
          position: "absolute",
          left: -28,
          top: 8,
          width: 13,
          height: 13,
          borderRadius: "50%",
          background: vis ? C.accent : C.border,
          border: `2px solid ${C.bg}`,
          transition: "background 0.5s ease",
          boxShadow: vis ? `0 0 12px ${C.accentGlow}` : "none",
        }}
      />
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? C.surfaceHover : C.surface,
          border: `1px solid ${hovered ? C.borderLight : C.border}`,
          borderRadius: 12,
          padding: "28px 32px",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: C.white,
              margin: 0,
              lineHeight: 1.3,
              border: 1,
            }}
          >
            {exp.role}
          </h3>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: C.accent,
              fontWeight: 500,
            }}
          >
            {exp.date}
          </span>
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: C.textDim,
            marginBottom: 12,
            fontWeight: 500,
          }}
        >
          {exp.company}
        </div>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: C.textMuted,
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {exp.desc}
        </p>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 16,
            flexWrap: "wrap",
          }}
        >
          {exp.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: C.accent,
                background: C.accentDim,
                padding: "4px 12px",
                borderRadius: 20,
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      <SectionHeader number="02" title="Experience" id="experience" />

      <div style={{ position: "relative", paddingLeft: 32 }}>
        {/* Timeline line */}
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 8,
            bottom: 8,
            width: 1,
            background: C.border,
          }}
        />
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
