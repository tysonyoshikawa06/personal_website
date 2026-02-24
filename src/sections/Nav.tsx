import { useState, useEffect } from "react";
import { C, NAV_LINKS } from "../constants";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(11,11,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? `1px solid ${C.border}`
          : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 72,
        }}
      >
        <a
          href="#about"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            color: C.accent,
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          TY<span style={{ color: C.textDim }}>.</span>
        </a>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="nav-desktop"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: C.textMuted,
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = C.accent)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = C.textMuted)
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <div
            style={{
              width: 24,
              height: 2,
              background: C.text,
              marginBottom: 6,
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: C.text,
              marginBottom: 6,
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: C.text,
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            background: "rgba(11,11,15,0.97)",
            borderTop: `1px solid ${C.border}`,
            padding: "20px 24px",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                color: C.textMuted,
                textDecoration: "none",
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
