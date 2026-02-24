import { useEffect } from "react";
import { C, FONTS_URL } from "./constants";
import {
  Nav,
  Hero,
  StatsStrip,
  Skills,
  Experience,
  Education,
  Projects,
  Footer,
} from "./sections";

export default function App() {
  useEffect(() => {
    if (!document.querySelector('link[href*="Syne"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = FONTS_URL;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div
      style={{
        background: C.bg,
        color: C.text,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${C.bg}; margin: 0; }
        ::selection { background: ${C.accent}; color: ${C.bg}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${C.borderLight}; }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>

      <Nav />
      <Hero />
      <StatsStrip />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}
