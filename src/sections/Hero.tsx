import { useReveal } from "../hooks";
import { C, SOCIAL_LINKS } from "../constants";
import { LinkedInIcon, GitHubIcon } from "../components/ui";
import React from "react";

const ICON_MAP: Record<string, React.FC> = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
};

export function Hero() {
  const [ref, vis] = useReveal(0.1);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.accentGlow} 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 60,
          position: "relative",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Text */}
        <div
          style={{
            flex: "1 1 500px",
            maxWidth: 620,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: C.accent,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Software Engineer &amp; Educator
          </div>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(42px, 6vw, 76px)",
              lineHeight: 1.05,
              color: C.white,
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Tyson
            <br />
            <span style={{ color: C.accent }}>Yoshikawa</span>
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: C.textMuted,
              marginTop: 28,
              maxWidth: 520,
            }}
          >
            Hi! My name is Tyson, and I am a student studying Computer Science
            and Education at <b>Cornell University</b>. I'm passionate about
            educational technology and anything related to using software to
            drive social change. Outside of academics, I enjoy cooking, hitting
            the gym, and listening to music.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://docs.google.com/document/d/18cpUPuy4OfZS9X9pm_cV3ZB-Uy8l7QCs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                padding: "12px 28px",
                background: C.accent,
                color: C.bg,
                borderRadius: 6,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: `0 0 0 0 ${C.accent}`,
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 24px rgba(232,168,76,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = `0 0 0 0 ${C.accent}`;
              }}
            >
              Resume
            </a>
            <a
              href="mailto:tmy25@cornell.edu"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                padding: "12px 28px",
                background: "transparent",
                color: C.text,
                borderRadius: 6,
                textDecoration: "none",
                border: `1px solid ${C.borderLight}`,
                letterSpacing: "0.02em",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement;
                el.style.borderColor = C.accent;
                el.style.color = C.accent;
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement;
                el.style.borderColor = C.borderLight;
                el.style.color = C.text;
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
            {SOCIAL_LINKS.map((s) => {
              const Icon = ICON_MAP[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    color: C.textDim,
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = C.textDim)
                  }
                >
                  {Icon && <Icon />}
                </a>
              );
            })}
          </div>
        </div>

        {/* Headshot */}
        <div
          style={{
            flex: "0 0 auto",
            opacity: vis ? 1 : 0,
            transform: vis
              ? "translateY(0) scale(1)"
              : "translateY(30px) scale(0.95)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <div
            style={{
              width: "clamp(260px, 28vw, 360px)",
              height: "clamp(320px, 34vw, 440px)",
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              border: `2px solid ${C.border}`,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(135deg, ${C.accentDim} 0%, transparent 50%)`,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <img
              src="/headshot.png"
              alt="Tyson Yoshikawa"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
