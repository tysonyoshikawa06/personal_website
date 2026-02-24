import { useReveal } from "../../hooks";
import { C } from "../../constants";

interface SectionHeaderProps {
  number: string;
  title: string;
  id: string;
}

export function SectionHeader({ number, title, id }: SectionHeaderProps) {
  const [ref, vis] = useReveal(0.2);

  return (
    <div
      ref={ref}
      id={id}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 48,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateX(0)" : "translateX(-30px)",
        transition: "all 0.7s ease",
        scrollMarginTop: 100,
      }}
    >
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 14,
          color: C.accent,
        }}
      >
        {number}
      </span>
      <div style={{ width: 40, height: 1, background: C.accent }} />
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(28px, 4vw, 40px)",
          color: C.white,
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
