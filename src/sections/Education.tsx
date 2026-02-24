import { useState, useCallback, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { useReveal } from "../hooks";
import { C, EDUCATION_OVERVIEW, COURSEWORK, ACTIVITIES } from "../constants";
import { SectionHeader } from "../components/ui";

function OverviewContent() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 20,
      }}
    >
      {EDUCATION_OVERVIEW.map((item) => (
        <div key={item.label}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: C.textDim,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            {item.label}
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: C.text,
              fontWeight: 500,
            }}
          >
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function CourseworkContent() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 12,
      }}
    >
      {COURSEWORK.map((c) => (
        <div
          key={c}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: C.textMuted,
            padding: "10px 16px",
            background: C.bg,
            borderRadius: 8,
            border: `1px solid ${C.border}`,
          }}
        >
          {c}
        </div>
      ))}
    </div>
  );
}

function ActivitiesContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {ACTIVITIES.map((a) => (
        <div
          key={a.org}
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            padding: "12px 16px",
            background: C.bg,
            borderRadius: 8,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: C.accent,
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: C.text,
                fontWeight: 500,
              }}
            >
              {a.role}
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: C.textDim,
              }}
            >
              {a.org}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

interface AccordionItem {
  key: string;
  title: string;
  content: ReactNode;
}

const SECTIONS: AccordionItem[] = [
  { key: "overview", title: "Overview", content: <OverviewContent /> },
  {
    key: "coursework",
    title: "Relevant Coursework",
    content: <CourseworkContent />,
  },
  {
    key: "activities",
    title: "Current Activities & Leadership",
    content: <ActivitiesContent />,
  },
];

export function Education() {
  const [expanded, setExpanded] = useState<string | null>("overview");
  const [ref, vis] = useReveal(0.15);

  const toggle = useCallback((key: string) => {
    setExpanded((prev) => (prev === key ? null : key));
  }, []);

  return (
    <section
      style={{
        padding: "100px 24px",
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader number="03" title="Education" id="education" />

        <div
          ref={ref}
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease",
          }}
        >
          {SECTIONS.map((s, i) => (
            <AccordionPanel
              key={s.key}
              item={s}
              isOpen={expanded === s.key}
              onToggle={() => toggle(s.key)}
              showBorder={i < SECTIONS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionPanel({
  item,
  isOpen,
  onToggle,
  showBorder,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  showBorder: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderBottom: showBorder ? `1px solid ${C.border}` : "none",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 18,
            fontWeight: 600,
            color: isOpen ? C.accent : C.text,
            transition: "color 0.3s",
          }}
        >
          {item.title}
        </span>
        <span
          style={{
            color: C.textDim,
            fontSize: 22,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          height: isOpen ? height : 0,
          overflow: "hidden",
          transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={contentRef} style={{ paddingBottom: 28 }}>
          {item.content}
        </div>
      </div>
    </div>
  );
}
