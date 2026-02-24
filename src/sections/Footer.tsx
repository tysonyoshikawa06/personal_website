import { C } from "../constants";

const FOOTER_LINKS = [
  { href: "https://www.linkedin.com/in/tysonyoshikawa/", label: "LinkedIn" },
  { href: "https://github.com/tysonyoshikawa06", label: "GitHub" },
  {
    href: "https://docs.google.com/document/d/18cpUPuy4OfZS9X9pm_cV3ZB-Uy8l7QCs",
    label: "Resume",
  },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${C.border}`,
        padding: "48px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 28,
          color: C.accent,
          marginBottom: 16,
        }}
      >
        Let's Connect!
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 15,
          color: C.textMuted,
          marginBottom: 24,
        }}
      >
        <a
          href="mailto:tmy25@cornell.edu"
          style={{
            color: C.text,
            textDecoration: "none",
            borderBottom: `1px solid ${C.border}`,
            paddingBottom: 2,
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.borderColor = C.accent)
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.borderColor = C.border)
          }
        >
          tmy25@cornell.edu
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        {FOOTER_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: C.textDim,
              textDecoration: "none",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = C.accent)
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = C.textDim)
            }
          >
            {l.label}
          </a>
        ))}
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          color: C.textDim,
          marginTop: 40,
          opacity: 0.5,
        }}
      >
        © 2025 Tyson Yoshikawa
      </div>
    </footer>
  );
}
