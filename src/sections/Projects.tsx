import { useState } from "react";
import { useReveal } from "../hooks";
import { C, PROJECTS } from "../constants";
import { SectionHeader, ArrowUpRightIcon } from "../components/ui";

interface ProjectItem {
  src: string;
  date: string;
  title: string;
  link: string;
  stack: string[];
  desc: string;
  featured?: boolean;
}

function ProjectCard({ proj, index }: { proj: ProjectItem; index: number }) {
  const [ref, vis] = useReveal(0.15);
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isEven ? "row" : "row-reverse",
          gap: 40,
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 16,
          flexWrap: "wrap",
        }}
      >
        {/* Image */}
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            flex: "1 1 400px",
            minHeight: 280,
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
            display: "block",
          }}
        >
          <img
            src={proj.src}
            alt={proj.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          {proj.featured && (
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: C.bg,
                background: C.accent,
                padding: "4px 12px",
                borderRadius: 20,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Current Project
            </div>
          )}
        </a>

        {/* Info */}
        <div
          style={{
            flex: "1 1 340px",
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: C.accent,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {proj.date}
          </span>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 26,
              color: C.white,
              margin: "8px 0 12px",
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              lineHeight: 1.3,
            }}
          >
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                gap: 10,
                color: C.white,
                textDecoration: "none",
              }}
            >
              {proj.title}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 18,
                  height: 18,
                  flexShrink: 0,
                  color: C.textDim,
                }}
              >
                <ArrowUpRightIcon
                  style={{
                    transition: "transform 0.3s",
                    transform: hovered
                      ? "translate(3px, -3px)"
                      : "translate(0, 0)",
                  }}
                />
              </span>
            </a>
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: C.textMuted,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {proj.desc}
          </p>
          <div
            style={{
              display: "flex",
              gap: 6,
              marginTop: 20,
              flexWrap: "wrap",
            }}
          >
            {proj.stack.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  color: C.textDim,
                  background: C.bg,
                  padding: "4px 10px",
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
      <SectionHeader number="04" title="Projects" id="projects" />

      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {PROJECTS.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} index={idx} />
        ))}
      </div>
    </section>
  );
}
