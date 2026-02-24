import { useReveal } from "../hooks";
import { C, STATS } from "../constants";
import { Counter } from "../components/ui";

export function StatsStrip() {
  const [ref, vis] = useReveal(0.2);

  return (
    <div
      ref={ref}
      style={{
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: "48px 24px",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s ease 0.1s",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        {STATS.map((s, i) => (
          <div key={i} style={{ textAlign: "center", minWidth: 140 }}>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 42,
                fontWeight: 800,
                color: C.accent,
              }}
            >
              <Counter end={s.value} suffix={s.suffix} />
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: C.textDim,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
